import styled from 'styled-components'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram}  from 'react-icons/ai'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';
import {useContext} from 'react'


const Container = styled.div`
height:50px;
width:100%;
padding:1rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:white;
font-family:"Varela", sans-serif;
font-size:16px;
z-index:999;

@media only screen and (min-width:768px){
overflow: hidden;
position: fixed; 
top: 0;
}
`



const Left= styled.div`
display:flex;

`

const Icons = styled.div`
margin:0px 5px;
`

const Right= styled.div`

@media only screen and (max-width:768px){
width:100%;
height:max-content;
padding:1rem;
background-color:#f5f5dc;
position:absolute;
top:0;
left:${({isOpen})=> (isOpen? "0px": "-500%")};
z-index:10000;
transition: .5s;
}

`

const List= styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
list-style:none;
cursor:pointer;


@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
`

const ListItems= styled.li`
margin:0px 8px;
@media only screen and (max-width:768px){
    margin-bottom:8px;
}



`

const Section= styled.div`
@media only screen and (max-width:768px){
    margin-bottom:10px;

}

`

const Image = styled.img`
width:30px;
height:30px;
border-radius:50%;
oject-fit:cover;
cursor:pointer;
`

const Close = styled.div`
display:none;
font-size:24px;

@media only screen and (max-width:768px){
    display:block;
    position:absolute;
    top:-80px;
    right:15px;
}
`

const Icon = styled.div``

const Burguer= styled.div`
display:none;
font-size:24px;
@media only screen and (max-width:768px){
    display:block;
    
}

`

const Div = styled.div``

export default function Navbar(){

    const {user, dispatch}= useContext(Context)
    

    const handleLogout = ()=> {
         dispatch({type:"LOGOUT"})
    }

    const [isOpen, setIsOpen] = useState(false)

    return(
        <Container>
           
                <Left>
                    <Icons>
                        <BsGithub/>
                    </Icons>
                    <Icons>
                        <BsLinkedin/>
                    </Icons>
                    <Icons>
                        <AiFillInstagram/>
                    </Icons>
                </Left>
                <Right isOpen={isOpen}>
                    <List>
                        <ListItems> <Link style={{textDecoration:"none", }} to="/" >Home</Link></ListItems>
                        <ListItems><Link style={{textDecoration:"none"}} to="/" >About</Link></ListItems>
                        <ListItems><Link  style={{textDecoration:"none"}} to="/write">Write</Link></ListItems>
                        <ListItems><Link style={{textDecoration:"none"}} to="/quiz">Quiz</Link></ListItems>
                        <ListItems onClick={handleLogout} >{user && "LogOut"}</ListItems>
                        <Section>

                            {user ? ( <Link to='/settings'><Image src={ user.profilePic.url || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}/></Link>)
                            :(<List>
                                <ListItems> <Link style={{textDecoration:"none"}} to="/login">Login</Link></ListItems>
                                <ListItems> <Link style={{textDecoration:"none"}} to="/register">Register</Link></ListItems>
                            </List>)}
                        </Section>
                    </List>
                    <Close onClick={() => setIsOpen(!isOpen)}>
                        <Icon><AiOutlineCloseCircle/></Icon>
                    </Close>
                </Right>
                <Burguer onClick={() => setIsOpen(!isOpen)}>
                 <CgMenuGridO/>
                </Burguer>
        
        </Container>
    )
}