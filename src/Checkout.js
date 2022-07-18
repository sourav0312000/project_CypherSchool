import React from 'react';
import styled from 'styled-components';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";

function Checkout() {

    const [{ basket }, ] = useStateValue();

    return (
        <CheckoutContainer>
            <CheckoutLeft>
              <CheckoutAd src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='Ad' />
              <CheckoutTitle>Your Shopping Basket</CheckoutTitle>
              {basket?.length !== 0 ? (
                basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                ))
              ) : (
                <EmptyBasket>
                  <img
                    src="https://www.bardanstore.com/_nuxt/img/d0bcbce.png"
                    alt="Empty Basket"
                  />
                  <BasketInfo>
                    <h1>Empty Basket</h1>
                    <Link to="/">Shop Today's deals</Link>
                  </BasketInfo>
                </EmptyBasket>
              )}
            </CheckoutLeft>
            <CheckoutRight>
              <Subtotal/>
            </CheckoutRight>
        </CheckoutContainer>
    );
}

export default Checkout;

const CheckoutContainer = styled.div`
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
`

const CheckoutLeft = styled.div`
    
`

const CheckoutRight = styled.div`

`

const CheckoutAd = styled.img`
    width: 100%;
    margin-bottom: 10px;
`

const CheckoutTitle = styled.h2`
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`

const EmptyBasket = styled.div`
    display: flex;
    margin: 2.5em 3.5em;
    img {
        object-fit: contain;
        height: 12em;
        margin: 0em 4em 0 0;
    }
`

const BasketInfo = styled.div`
    margin: 1em 0;
    h1 {
        font-size: 1.9rem;
        font-weight: 500;
    }
    a {
        color: #427885;
        font-size: 1.15rem;
        margin-top: 0.8em;

        &:hover {
            color: #c7511f;
        }

        &:focus {
            color: #c7511f;
        }
    }
`