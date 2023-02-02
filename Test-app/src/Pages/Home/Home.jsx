import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/Sidebar/SideBar'
import {publiRequest} from '../../config'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css'

const Container= styled.div`
display:grid;
gap:20px;


`

export default  function Home(){
    const [posts, setPosts] = useState([]);
    const {search}= useLocation();
   
   
    useEffect(() => {
      const fetchPosts= async()=> {
        const res = await publiRequest.get('/posts' + search);
        setPosts(res.data)
        
        
      }
      fetchPosts();
    },[search])

    return(
        <Container className="home">
            
            <Header/>
            <Posts posts={posts} />
            <SideBar/>
            <Footer/>
        </Container>
    )
}