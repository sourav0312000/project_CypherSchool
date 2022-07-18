import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'

function Subtotal() {

    const [{ basket, user }, ] = useStateValue();
    const navigate = useNavigate();

    return (
        <SubtotalContainer>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <SubtotalGift>
                        <input type="checkbox" /> This order contains a gift
                    </SubtotalGift>
                </>
            )}
            
            value={getBasketTotal(basket)}
            decimalScale={2}
            thousandSeparator={true}
            thousandSpacing='2s'
            prefix={"₹"}
            displayType={"text"}
            />

            {!user ? <CheckoutButton onClick={e => navigate('/login')} >SignIn & Checkout</CheckoutButton>
            : <CheckoutButton onClick={e => navigate('/payment')} >Proceed to Checkout</CheckoutButton>
            }
        </SubtotalContainer>
    );
}

export default Subtotal;

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
`

const SubtotalGift = styled.small`
    display: flex;
    align-items: center;

    input {
        margin-right: 5px;
    }
`

const CheckoutButton = styled.button`
    width: 100%;
    height: 30px;
    background: #f0c14b;
    border-radius: 2px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
`
