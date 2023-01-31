import styled from 'styled-components'
import QuizC from '../Components/QuizC'

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image:  url('https://media.istockphoto.com/photos/engineer-behind-with-overload-tool-picture-id1136994503?k=20&m=1136994503&s=612x612&w=0&h=sFYhAaJc5gScAzS6HRWJHyLDs5ehvir4lsspzA5QZeE=');
background-position: right center;
background-size: cover;
`

export default function Quiz(){
    return(
        <Container>
            <QuizC/>
        </Container>
    )
}