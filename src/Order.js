import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <OrderContainer>
            <h2>{moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}</h2>
            <OrderID>ORDER ID : <small>{order.id}</small></OrderID>

            {order.data.basket.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    hideButton
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                <OrderTotal>Order Total: {value}</OrderTotal>
                )} 
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing='2s'
                prefix={"₹"}
            />
        </OrderContainer>
    );
}

export default Order;

const OrderContainer = styled.div`
    padding: 40px;
    margin: 20px 30px;
    border: 1px solid lightgray;
    background-color: white;
    position: relative;
`

const OrderID = styled.div`
    position: absolute;
    top: 40px;
    right: 20px;
`

const OrderTotal = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-align: right;
`