import styled from 'styled-components'
import './header.css'

const Container = styled.div`
width:100%;
margin-top:150px;

`

const Section = styled.div`
font-family: 'Lora', serif;
color:#444;
position:relative;
display:flex;
align-items:center;
justify-content:center;
top:-20%;

`

const Span1= styled.span`
position:absolute;
top:18px;
font-size:30px;
`

const Span2= styled.span`
position:absolute;
top:45px;
font-size:100px;
`



export default function Header(){
    return(
        <Container className="header">
            <Section>
                <Span1>Oil  &  Field</Span1>
                <Span2>Blog</Span2>
            </Section>
           
        </Container>
    )
}