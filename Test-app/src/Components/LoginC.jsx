import styled from 'styled-components'
import{useRef, useContext } from 'react';
import{Context} from '../context/Context'
import {publiRequest} from '../config'

const Container = styled.div`

height:max-content;
`

const Title = styled.h3`
font-size:40px;

text-align:center;
`

const Form= styled.form`
display:flex;
flex-direction:column;
margin-top:20px;
`

const Label = styled.label`
margin:10px 0px;
`

const Input = styled.input`
padding:10px;
border:none;
background-color:white;
outline:none;

`

const Button = styled.button`
border:none;
padding:10px;
background-color:lightcoral;
border-radius:6px;
cursor:pointer;
margin-top:15px;
color:white;

`


export default function LoginC(){

    const userRef= useRef();
    const passwordRef= useRef();
    const { dispatch, isFetching}= useContext(Context)

    
    const handleSubmit= async(e)=>{
        e.preventDefault();

        dispatch({type:"LOGIN_START"});
        try{
            const res= await publiRequest.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,

            });

            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
            window.location.replace('/')

        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
 
        }




    };
    

    return(
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit} >
                <Label>Username</Label>
                <Input type="text" placeholder='Enter your Username'
                  ref={userRef} />
                <Label>Password</Label>
                <Input type="password" placeholder='Enter your Password'
                 ref={passwordRef} />
                <Button type="submit" disabled={isFetching} >Login</Button>
            </Form>
            
        </Container>
    )
}