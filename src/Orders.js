import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useStateValue } from './StateProvider';
import Order from './Order'
import { Link } from 'react-router-dom'
import db from './firebase'
import {doc, query, collection, onSnapshot, orderBy} from 'firebase/firestore'

function Orders() {

    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState();

    useEffect(() => {
        if(user){
        const ref = collection(db, 'users', user?.uid, 'orders')
        const orderedOrders = query(ref, orderBy('created', 'desc'))
        onSnapshot(orderedOrders, snapshot => {
             setOrders(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data()
             })))
          })
        } else {
          setOrders([])
        }
      }, [user])

    

    return (
        <OrdersContainer>
            <h1>Your Orders<span>🛒</span></h1>
            {!user && 
            <Link to={'/login'}>
                <LoginContainer>
                <img src='https://ck12live.s3.ap-south-1.amazonaws.com/user/5f688627ac992228651c21b1/classroom/original/1607234971537-login.png' alt='' />
                <h2>Sign-In to see your orders 🔜</h2>
                </LoginContainer>
            </Link>}
            <OrderContainer>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </OrderContainer>
        </OrdersContainer>
    );
}

export default Orders;

const OrdersContainer = styled.div`

    h1 {
        margin: 10px 30px;
    }

    h2 {
        margin: 30px 30px;
    }

    span {
        font-size: 40px;
    }

    img {
        height: 200px;
        margin: 0px 30px;
    }
`

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`

const OrderContainer = styled.div`

`