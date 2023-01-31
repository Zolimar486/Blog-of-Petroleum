import styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'
import RegisterC from '../Components/RegisterC'
import {useState} from 'react'


const Container = styled.div`

background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)),
 url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

background-size: cover;
display:flex;
align-items:center;
justify-content:center;

`


export default function Register(){
    return(
        
        <>
        
        <Container>
          <RegisterC/>
        </Container>
        </>
        
    )
}