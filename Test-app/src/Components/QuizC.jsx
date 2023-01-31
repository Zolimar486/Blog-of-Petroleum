import styled from 'styled-components'
import '../index'
import questions from '../data/db'
import {useState , useEffect} from 'react'

const Container = styled.div`
height:max-content;

`

const Wrapper = styled.div`
background-color:#252d4a;
border-radius:15px;
box-shadow: 10px 10px 42px 0px rgba(0,0,0,0.75);
display:flex;
max-width:450px;
min-width:300px;
height:min-content;
min-height:200px;
justify-content:space-evenly;
padding:20px;

`

const GameOver = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
margin-top:35px;
`

const Span = styled.span`
color:white;
@media only screen and (min-width:600px){
 font-family:"Varela", sans-serif;
font-size:15px;
}

`


const Left= styled.div`
    width:100%;
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`

const NumberQuestions= styled.div`
margin-top:20px;
`

const Questions = styled.span`
color:white;
@media only screen and (min-width:600px){
    font-family:"Varela", sans-serif;
  font-size:15px;
}
`

const Title = styled.div`
color:white;
margin-top:60px;
@media only screen and (min-width:600px){
    font-family:"Varela", sans-serif;
  font-size:15px;
}
`


const Right= styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:space-between;
`

const Button = styled.button``

const Button2 = styled.button`
width:100%;
  font-size:16px;
  color:#ffffff;
  background-color: #252d4a;
  border-radius:15px;
  display: flex;
  padding:5px;
  justify-content: center;
  align-items: center;
  border:5px solid #234668;
  cursor:pointer;
  margin-top:20px;
  
`
const Time = styled.div`
margin-top:15px;
@media only screen and (min-width:600px){
    font-family:"Varela", sans-serif;
    font-size:15px;
}
`

const SpanTime = styled.span`
font-size:14px;

color:#fcbf3d;
`

const Button3= styled.button`
padding:10px;
background-color: #252d4a;
border-radius:10px;
color:white;
cursor:pointer;
width:100px;
border:5px solid #234668;
`


export default function QuizC(){
    
    const [actualQuestion, setActualQuestion] = useState(0);
    const [puntuation, setPuntuation] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(40);
    const [areDisabled, setAreDisabled] = useState(false)

    
    function handleAnswerSubmit(isCorrect, e){
        // add Puntuation
        if(isCorrect) setPuntuation(puntuation + 1 )

        // Add Style , in order to determine if its correct or not the answer
       
        e.target.classList.add(isCorrect? "correct" : "incorrect");
          
        
        
        // change to the next question

       setTimeout(() => {
        if(actualQuestion === questions.length -1){
            setIsFinished(true)
        }else{
            setActualQuestion(actualQuestion + 1)
        }
       }, 1500)
  
    }

    useEffect(() => {
      const intervale = setInterval(() => {
        if(timeLeft > 0) setTimeLeft((prev)=> prev -1 )
        if(timeLeft === 0 ) setAreDisabled(true)
      }, 1000)

      return() => clearInterval(intervale)

    },[timeLeft])

  if(isFinished) return(
    <Container>
        <Wrapper>
     <GameOver>
        <Span>you got {puntuation} of {questions.length} {""}</Span>
        <Button2 onClick ={() => window.location.replace('/quiz')}>Retry</Button2>
     </GameOver>
    </Wrapper>
    </Container>
  )

    return(
        <Container>
            <Wrapper>
                <Left >
                    <NumberQuestions>
                        <Questions className='question' >Question {actualQuestion + 1} of  {questions.length} </Questions>
                    </NumberQuestions>

                    <Title className="title">{questions[actualQuestion].title}</Title>
                    <Time>
                        {!areDisabled ? (
                            <SpanTime> Time Remaining:{timeLeft}</SpanTime>
                        ) : (
                            <Button3 onClick={() => {
                                setTimeLeft(40)
                                setAreDisabled(false)
                                setActualQuestion(actualQuestion + 1)
                            }}>Continue</Button3>
                        )}
                    </Time>
                </Left>

                <Right>
                    {questions[actualQuestion].options.map((response) => (
                        <Button disabled={areDisabled} key={response.responseText} className="button-option" onClick={(e) => handleAnswerSubmit(response.isCorrect, e)} >{response.responseText}</Button>
                    ))} 
                </Right>
            </Wrapper>
        </Container>
    )

                    
}