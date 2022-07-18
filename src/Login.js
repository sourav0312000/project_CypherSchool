import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "firebase/auth";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <LoginContainer>
            <Link to='/'>
                <LoginLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            </Link>

            <LoginForm>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)} />

                    <LoginButton type='submit' onClick={signIn} >Sign In</LoginButton>
                </form>

                <p>
                    By signing-in you agree to the AMAZON UNOFFICIAL Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <RegisterButton type='submit' onClick={register} >Create your Amazon Account</RegisterButton>
            </LoginForm>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: white;
`

const LoginLogo = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
`

const LoginForm = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 20px;

    h1 {
        margin-bottom: 20px;
    }

    h5 {
        font-weight: 500;
        margin-button: 20px;
    }

    form h5 {
        margin-bottom: 5px;
    }

    form input {
        height: 30px;
        margin-bottom: 10px;
        border-radius: 3px;
        background-color: white;
        width: 98%;
    }

    p {
        margin-top: 15px;
        font-size: 12px;
    }
`

const LoginButton = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 30px;
    background-color: #f0c14b;
    border: 1px solid;
    border-radius: 2px;
    border-color: #a88734 #9c7e31 #846a29;
    cursor: pointer;
`

const RegisterButton = styled(LoginButton)`
    background-color: #EFEFEF;
    border-color: darkgray;
`