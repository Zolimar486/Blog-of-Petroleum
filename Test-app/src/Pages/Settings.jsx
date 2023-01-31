import styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'
import SideBar from '../Components/Sidebar/SideBar'
import Settings2 from '../Pages/Settings2/Settings'

const Container = styled.div`
@media only screen and (min-width:600px){
    display:flex;
}
`

export default function Settings(){
    return(
        <>
        
        <Container>
            <Settings2/>
            <SideBar />
        </Container>
        </>
    )
}