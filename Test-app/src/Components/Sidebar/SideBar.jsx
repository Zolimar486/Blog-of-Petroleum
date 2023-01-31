import styled from 'styled-components'
import {BsGithub} from 'react-icons/bs' 
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram}from 'react-icons/ai'
import profile from '../../Assets/profile.jpg'
import './side.css'


const Container = styled.div`
margin:20px;
 background-color:#fbfbfb;
display:flex;
 border-radius:10px;
flex-direction: column;
align-items: center;
height:max-content;
padding-bottom:30px;

@media only screen and (max-width:600px){
    margin:10px auto;
     width:80%;
}



`

const SideItems = styled.div`
display:flex;
flex-direction: column;
 align-items:center;
 
`

const SideTitle = styled.span`
margin:10px;
    padding:5px;
    width:80%;
    border-top:1px solid #a7a4a4;
    border-bottom:1px solid #a7a4a4;
    font-family: 'Varela Round', sans-serif;
    font-size:12px;
    color:#222;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    
`

const Image = styled.img`
margin-top:15px;
width:50%;
border-radius:10px;
`

const Desc= styled.p`
padding:20px;
`

const List = styled.ul`
list-style: none;
margin-bottom:30px;
 display:flex;
flex-wrap:wrap;

`

const ListItems= styled.li`

width:60px;
cursor:pointer;
margin:0px 4px;
`

const SideSocial= styled.div`
display:flex;

`

const Icons = styled.div`
margin:0px 5px;
font-size:16px;
cursor:pointer;
`





export default function SideBar(){
  

    return(
        <Container>
          <SideItems>
            <SideTitle>About me</SideTitle>
            <Image src={profile}/>
            <Desc>I'm a Petroleum Engineer who learned how to use the Html, Css, Js, and React technology in order just to build and deploy this Blog, which is focused on the Life of an oil field, this blog contains suitable information to be used for new Engineers.</Desc>
          </SideItems>
          <SideItems>
            <SideTitle>Categories</SideTitle>
            <List>
                <ListItems>Drilling</ListItems>
                <ListItems>Exploration</ListItems>
            </List>
          </SideItems>
          <SideItems>
            <SideTitle>Follow me</SideTitle>
            <SideSocial>
            <Icons><BsGithub/></Icons>
            <Icons><BsLinkedin/></Icons>
            <Icons><AiFillInstagram/></Icons>
           </SideSocial>      
          </SideItems>
        </Container>
    )
}