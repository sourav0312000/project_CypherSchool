import React from 'react';
import styled from 'styled-components'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';

function Product({id, title, price, rating, image}) {

    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (

        <CurrencyFormat
            renderText={(value) => (
                <>
                    <ProductContainer>
                        <ProductInfo>
                            <ProductTitle>
                                {title}
                            </ProductTitle>
                            <ProductPrice>
                                
                                <strong>{value}</strong>
                            </ProductPrice>
                            <ProductRating>
                                {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                            </ProductRating>
                            <ProductImage src={image} alt='' />
                            <Basket>
                                <BasketButton onClick={addToBasket}>Add to Basket</BasketButton>
                            </Basket>
                        </ProductInfo>
                    </ProductContainer>
                </>
            )}
            
            value={price}
            decimalScale={2}
            thousandSeparator={true}
            thousandSpacing='2s'
            prefix={"₹"}
            displayType={"text"}
            />
    );
}

export default Product;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    min-width: 100px;
    max-height: 400px;
    background-color: white;
    z-index: 1;

    transition: transform 250ms ease-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);
    }
`

const ProductInfo = styled.div`
    margin: bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const ProductTitle = styled.div`

`

const ProductPrice = styled.div`
    margin-top: 5px;
`

const ProductRating = styled.div`
    display: flex;
    margin-bottom: 15px;
`

const ProductImage = styled.img`
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
`

const Basket = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BasketButton = styled.button`
    background: #f0c14b;
    height: 30px;
    width: 100px;
    padding: 5px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    border-radius: 2px;
    color: #111;
    cursor: pointer;

    opacity: 0.95;
    transition: transform 100ms ease-out;

    &:hover {
        opacity: 1;
        font-weight: 530;
        transform: scale(1.05);
        box-shadow: 2px 2px 2px grey;
    }
`