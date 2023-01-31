import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import SinglePost from '../../Components/SinglePost/SinglePost'
import './single.css'
import SideBar from '../../Components/Sidebar/SideBar'

const Container = styled.div`
margin-top:80px;

@media only screen and ( min-width:600px){
    display:flex;
    
}
`

export default function single(){
    return(
       <>
       
       <Container className="single">
        <SinglePost/>
        <SideBar/>
       </Container>
       </>
    )
}