import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format'
import axios from './axios';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import db from './firebase'
import { doc, setDoc } from "firebase/firestore";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);



    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('The SECRET IS >>>> ', clientSecret)


    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            
            //paymentIntent = paymentConfirmation

            const ref = doc(db, 'users', user?.uid, 'orders', paymentIntent.id)
            setDoc(ref, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', {return: true});
        })
    }


    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }



    return (
        <Container>
            <PaymentContainer>
                <h1>
                    Checkout (<Link to='/checkout'>{basket.length} items</Link>)
                </h1>

                <PaymentSection>
                    <PaymentTitle>Delivery Address</PaymentTitle>
                    <PaymentAddress>
                        <p>{user?.email}</p>
                        <p>123 Jeff bezos Lane</p>
                        <p>Chennai - 602001</p>
                    </PaymentAddress>
                </PaymentSection>

                <PaymentSection>
                    <PaymentTitle>Review items and delivery</PaymentTitle>
                    <PaymentItems>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </PaymentItems>
                </PaymentSection>

                <PaymentSection>
                    <PaymentTitle>Payment Method</PaymentTitle>
                    <PaymentDetails>
                        <PaymentForm onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <PaymentPriceContainer>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}

                                    value={getBasketTotal(basket)}
                                    decimalScale={2}
                                    thousandSeparator={true}
                                    thousandSpacing='2s'
                                    prefix={"₹"}
                                    displayType={"text"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </PaymentPriceContainer>

                            {/* Error in card details */}
                            {error && <div>{error}</div>}
                        </PaymentForm>
                    </PaymentDetails>
                </PaymentSection>
            </PaymentContainer>
        </Container>
    );
}

export default Payment;

const Container = styled.div`
    background-color: white;
`

const PaymentContainer = styled.div`
    h1 {
        text-align: center;
        padding: 10px;
        font-weight: 400;
        background-color: rgb(234, 237, 237);
        border-bottom: 1px solid lightgray;

        a {
            text-decoration: none;
        }
    }
`

const PaymentForm = styled.form`
    max-width: 400px;
`

const PaymentSection = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
`

const PaymentTitle = styled.div`
    flex: 0.2;
    font-size: 20px;
    font-weight: 600;
`

const PaymentAddress = styled.div`
    flex: 0.8;
`

const PaymentItems = styled.div`
    flex: 0.8;
`

const PaymentDetails = styled.div`
    flex: 0.8;

    h3 {
        padding-bottom: 20px;
        margin-top: 20px;
    }
`

const PaymentPriceContainer = styled.div`
    max-width: 400px;

    button {
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        font-weight: bolder;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
    }
`