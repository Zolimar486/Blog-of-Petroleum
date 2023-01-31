import styled from 'styled-components'
import LoginC from '../Components/LoginC'
import Navbar from '../Components/Navbar/Navbar'

const Container = styled.div`
   display:flex;
    
    align-items: center;
    justify-content:center;
    background:linear-gradient(rgba(255,255,255, 0.5),
    rgba(255,255,255,0.5)), 
    url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-size: cover;
`

export default function Login(){
    return(
        <>
       
        <Container>
            <LoginC/>
        </Container>
        </>
    )
}