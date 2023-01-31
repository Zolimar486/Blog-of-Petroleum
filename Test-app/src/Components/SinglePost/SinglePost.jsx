import styled from 'styled-components'
import './singlepost.css'
import {BsTrash} from 'react-icons/bs'
import {CiEdit} from 'react-icons/ci'
import {useLocation} from 'react-router'
import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import{Context} from '../../context/Context'


const Container = styled.div`
border-radius:4px;
margin: 20px 40px;
height:max-content;



@media only screen and ( min-width:600px){
    margin:20px 15px;
    width:350%;
}
`

const Image = styled.img`
width:100%;
height:200px;
border-radius:10px;
object-fit:cover;

@media only screen and (min-width:600px){
    height:300px;
}
`

const Title = styled.h3`
text-align:center;
margin-top:15px;
font-family: 'lora', serif;

`

const Section= styled.div`
float:right;

`

const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:15px;
font-size:16px;
font-family:'Varela Round' sans-serif;
`

const Author = styled.span`
color:#b39656;
`

const Date = styled.span`
color:#b39656;
`

const Desc= styled.p`

margin-top:15px;
color:#666;
font-size: 15px;
line-height:24px;
`
const Input= styled.input`
margin-top:10px;
border:none;
padding:10px;
border-bottom:1px solid gray;
font-size:16px;
outline:none;
`
const Btns= styled.div``

const TextArea = styled.textarea`
margin-top:10px;
border:none;
padding:10px;
border-bottom:1px solid gray;
font-size:16px;
outline:none;
`

const Button = styled.button`
margin-top:10px;
padding:.4rem 1.4rem;
background-color:teal;
color:white;
border:none;
border-radius:6px;
cursor:pointer;

@media only screen and (min-width:380px){
    
}
`
const UpdateWrapper = styled.div`
display:flex;
flex-direction:column;
`

export default function SinglePost(){

    const location= useLocation();
    const path= location.pathname.split('/')[2];
    const [post, setPost] = useState({})  
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode]= useState(false)

    
   useEffect(()=> {
    const getPost= async()=>{
        const res = await axios.get('/posts/' + path);
        setPost(res.data);
        setTitle(res.data.title)
        setDesc(res.data.desc)
    };
    getPost();
},[path]); 

const handleDelete = async()=> {
    try{
        await axios.delete(`/posts/${post._id}` , {
            data:{ username : user.username},
        });
        window.location.replace('/');
    }catch(err){}
}

const handleUpdate= async()=> {
    try{
        await axios.put(`/posts/${post._id}`, {
             username: user.username , 
             title, 
             desc,
        });
       // window.location.reload()
       setUpdateMode(false)

    }catch(err){}
}

    return(
        <Container>
           
           {post.photo && (
            <Image src={ post.photo.url}/>
           )}
           
            
            {updateMode ? <Input  type="text" value={title}  onChange={(e) => setTitle(e.target.value)}/>
            
            : (
                <Title>{title} 
                  {post.username === user?.username &&
                     
                   <Section  type="color">
                       <i className=' far fa-edit'  style={{color:"teal", margin:"0px 5px", cursor:"pointer"}} onClick={() => setUpdateMode(true)}></i>
                        <i className=' far fa-trash-alt' style={{color:"tomato", cursor:"pointer"}} onClick={handleDelete}></i>
                    </Section>
                  }
              </Title>)} 
                
            
            <Wrapper>
                    <Author >Author: <Link  style={{textDecoration:"none",  color:"#b39656"}} to={`/?user=${post.username}`}> {post.username}</Link> </Author>
                    <Date>{new window.Date(post.createdAt).toDateString()}</Date>
                </Wrapper>
          <UpdateWrapper>
            
          {updateMode ? <TextArea value={desc}  onChange={(e) => setDesc(e.target.value)}/> : (
                
                    <Desc>{desc}</Desc>
                
             )}

             {updateMode && 
             <Button onClick={handleUpdate} style={{width:"50%", margin:"auto", marginTop:"15px", cursor:"pointer"}}>Update</Button>
             }
          </UpdateWrapper>
        </Container>
    )
 }