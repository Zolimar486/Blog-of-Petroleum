import styled from 'styled-components'
import './footer.css'
import {useState, useEffect} from 'react'

const Container = styled.div`
padding:20px;

`
const Desc= styled.p`
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:18px;
`

export default function Footer(){
     const [getYear, setGetYear] = useState()

     const data = () => setGetYear( new Date().getFullYear())

     useEffect(() => {
        data()
     },[])

    return(
        <Container className="footer">
        <Desc>© {getYear} Created by Zolimar Carrasquero | All Rights Reserved | </Desc>
        </Container>
    )
}