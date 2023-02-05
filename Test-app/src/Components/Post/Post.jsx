import styled from 'styled-components'
import './post.css'
import {Link} from 'react-router-dom';

const Container = styled.div`
height:max-content;
padding:20px;
margin:15px 0px;
@media only screen and (max-width:600px){
    margin:10px auto;
     width:80%;
}

`

const Image = styled.img`
width:100%;
height:280px;
object-fit:cover;
border-radius:10px;




@media only screen and (min-width:600px){
    height:180px;

    

}

@media  only screen and (min-width:900px){
    height:250px;
}
`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Category= styled.div`
margin-top:15px;
`

const Title = styled.span`
margin:0px 5px;
font-family: 'Varela Round', sans-serif;
 font-size:13px;
 color:#be9656;
 line-height:20px;

`

const Title1= styled.span`
margin-top:15px;
font-family: 'Josefin Sans', sans-serif;
font-size:20px;
font-weight:700;
cursor:pointer;

`


const Date = styled.div`
color:#333;
margin-top:15px; 
`

const Desc= styled.p`
overflow:hidden;
text-overflow:ellipsis;
display: -webkit-box;
-webkit-line-clamp:4;
-webkit-box-orient:vertical;
line-height:24px;
margin-top:15px;
font-size:16px;

@media only  screen and (max-width:600px){
    font-size:18px;
}
`

export default function Post({post}){

    

    return(
    <Container>
        {post.photo &&
         <Image src={ post.photo.url}/>
        }
        <Wrapper>
            <Category>
                
                {post.categories.map((c) => (
                    <Title>{c.name}</Title>
                ))}
            </Category>
            <Link style={{textDecoration:"none"}}  to={`/post/${post._id}`}>
            <Title1>{post.title}</Title1>
             </Link>
            <Date>{new window.Date(post.createdAt).toDateString()} </Date>
            <Desc>{post.desc} </Desc>
        </Wrapper>
    </Container>
    )
}