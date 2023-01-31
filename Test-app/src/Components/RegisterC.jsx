import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { validateEmail, validatePassowrd, validateUsername } from '../validate';
import InlineError from './InlineError';
import axios from 'axios'
import {BsCloudPlus} from 'react-icons/bs'


const Container = styled.div`
height:max-content;


`

const Title = styled.h3`
text-align:center;
font-size:40px;
`

const Form = styled.form`

margin-top:20px;

@media only screen and (min-width:600px){
    display:flex;
    
    align-items:center;
  
    
}

`

const Left = styled.div`
display:flex;
flex-direction:column;
`


const Label  = styled.label`
margin:10px 0px;
`


const Input = styled.input`

background-color:white;
border:none;
padding:10px;
outline:none;
`

const Right= styled.div`
margin-top:30px;

@media only screen and (min-width:600px){
    margin-left:30px;
    


}
`

const InfoUser = styled.div`
display:flex;
align-items:center;

@media only screen and (min-width:600px){
    
}

`

const Image = styled.img`
width:100px;
height:100px;
border-radius:10px;
border:1px solid lightgray;

`
const Div = styled.div`
width:100px;
height:120px;
border-radius:10px;
background-color:white;
border:1px solid lightgray;
text-align:center;
padding:20px;
`

const Span = styled.span`

`

const Label1 = styled.label``

const Input1 = styled.input``



const Button = styled.button`
padding:10px;
background-color:teal;
color:white;
border-radius:6px;
border:none;
margin-top:20px;
cursor:pointer;

@media only screen and (min-width:600px){
     margin-top:20px;
}
`



export default function RegisterC(){
    
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [usernameError, setUsernameError] = useState("")
    const [emailError, setEmailError]= useState("");
    const [passwordError, setPasswordError] = useState("")
    const [error, setError]= useState(false)
    const [image , setImage ] = useState("")

    const handleImageUpload = (e)=> {
    const file = e.target.files[0];

      TranformFile(file)

    }

    const TranformFile = (file) => {
        const reader = new FileReader()
   
        if(file){
         reader.readAsDataURL(file)
         reader.onloadend = ()=> {
           setImage(reader.result)
         }
        }else{
         setImage("")
        }
   
     }

     


    const handleSubmit= async(e)=> {
        e.preventDefault();
        setError(false)
        try{
            const res= await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
                profilePic: image,
            });

            res.data && window.location.replace('/login')
        }catch(err){
            setError(true)
        }

       

    }

    useEffect(() => {

        validateUsername({username, setUsernameError})
        validateEmail({email, setEmailError})
        validatePassowrd({password, setPasswordError})
        
    },[username, email, password])



    return(
        <>
        
        <Container>
        
            <Title>Register</Title>
             <Form  onSubmit={handleSubmit} >
               
              <Left>
                <Label>Username</Label>
                <Input type="text" placeholder='Enter your Username' 
                onChange={e => setUsername(e.target.value)}/>
                 {usernameError && <InlineError error={usernameError} />}

                 <Label>Email</Label>
                <Input type="email" placeholder='Enter your Email'
               onChange={e => setEmail(e.target.value)}/>
                  {emailError && <InlineError  error={emailError}/>}


                <Label>Password</Label>
                <Input type="password"  placeholder='Enter your Password' 
               onChange={e => setPassword(e.target.value)}/>
               
              {passwordError && <InlineError error={passwordError}/>}

           
              { error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
              
              </Left>

              <Right>
               <InfoUser>
               {image ? (
                <Image src= { image }/>
               ) : (
                  <Div>
                     <Span>Preview Will  Appear</Span>
                  </Div>
               ) }
               <Label1 htmlFor="file">
                 <BsCloudPlus style={{fontSize:"30px",cursor:"pointer", margin:"0px 10px"}}/>
               </Label1>
               <Input1 type="file" accept="image/" id="file" style={{display:"none"}}  onChange={handleImageUpload} />
               </InfoUser>
               <Button type="submit">Create User</Button>

              </Right>
               
             </Form>
             
             
        </Container>
        
        
        </>
    )
}