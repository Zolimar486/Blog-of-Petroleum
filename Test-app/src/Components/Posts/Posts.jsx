import styled from 'styled-components'
import './posts.css'
import Post from '../Post/Post'


const Container = styled.div`



@media  only screen and (min-width:600px){
    display:grid;
    grid-template-columns:repeat(2, 2fr);
    gap:5px;
}

@media only sceen and (min-width:900px){
    display:grid;
    grid-template-columns:repeat(2, 2fr);
    gap:20px;
}
`

export default function Posts({posts}){
    return(
        <Container className="main">
            {posts.map((p)=> (
                  <Post post={p}/>
              ))}
           
        </Container>
    )
}