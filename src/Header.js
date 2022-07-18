import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const [{ basket, user }, ] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon' />
            </Link>

            <Search>
                <SearchInput type='text' />
                <SearchButton />
            </Search>

            <HeaderNav>
                <Option>
                    <OptionLine1>
                        
                    </OptionLine1>
                    <OptionLine2>
                        <img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt='' /> 
                    </OptionLine2>
                </Option>

                <Link to={!user && '/login'}>
                    <Option onClick={handleAuthentication}>
                        <OptionLine1>
                            Hello {user ? user.email : 'Guest'}
                        </OptionLine1>
                        <OptionLine2>
                            {user ? 'Sign Out' : 'Sign In'}
                        </OptionLine2>
                    </Option>
                </Link>
                
                <Link to={'/orders'}>
                    <Option>
                        <OptionLine1>
                            Returns
                        </OptionLine1>
                        <OptionLine2>
                            & Orders 
                        </OptionLine2>
                    </Option>
                </Link>

                <Option>
                    <OptionLine1>
                        Your
                    </OptionLine1>
                    <OptionLine2>
                        Prime
                    </OptionLine2>
                </Option>

                <Link to='/checkout'>
                    <OptionBasket>
                        <BasketButton />
                        <BasketCount>
                            {basket?.length}
                        </BasketCount>
                    </OptionBasket>
                </Link>
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
`

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`

const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
`

const SearchInput = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
`

const SearchButton = styled(SearchIcon)`
    padding: 5px;
    height: 22px !important;
    background-color: #f0c14b; 
    cursor: pointer;
    
    &: hover {
        background-color: #f3a847;
    }
`

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    cursor: pointer;

    &: hover {
        color: #f3a847;
    }
`

const OptionLine1 = styled.a`
    font-size: 10px;
    text-decoration-color: #131921;
`

const OptionLine2 = styled.a`
    font-size: 13px;
    font-weight: 800;
    text-decoration-color: #131921;

    img {
        width: 25px;
        height: 15px;
        margin-top: 12px;
    }
`

const OptionBasket = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

const BasketButton = styled(ShoppingBasketIcon)`
    &: hover {
        color: #f3a847;
    }
`

const BasketCount = styled(OptionLine2)`
    margin-left: 10px;
    margin-right: 10px;

    &: hover {
        color: #f3a847;
    }
`