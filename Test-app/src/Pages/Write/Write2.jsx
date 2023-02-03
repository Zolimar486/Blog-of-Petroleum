import './write.css'
import {useState} from 'react'
import {publiRequest} from '../../config'
import { useContext } from 'react';
import {Context} from '../../context/Context'
import {BsCloudPlus} from 'react-icons/bs'



export default function Write2() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { user} = useContext(Context);
  const [postImg, setPostImg] = useState("")


  const handleImageUpload = (e)=> {
    const file = e.target.files[0]

    TranformFile(file)

  

  }

  const TranformFile = (file) => {
     const reader = new FileReader()

     if(file){
      reader.readAsDataURL(file)
      reader.onloadend = ()=> {
        setPostImg(reader.result)
      }
     }else{
      setPostImg("")
     }

  }
  
 


  const handleSubmit = async(e)=> {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      photo:postImg
    };
   
    try{
      const res = await publiRequest.post('/posts', newPost);
      
      
      window.location.replace('/post/' + res.data._id)
     

      


    }catch(err){}
  }
  
    
    return (
      <div className="write">
        {postImg && (
          <img className="writeImg" src={postImg} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <BsCloudPlus style ={{fontSize:"25px", marginTop:"9px", cursor:"pointer"}}/>
            </label> 
            <input
              type="file"
              id="fileInput"
              accept="image/"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              style={{fontSize:"17px"}}
              autoFocus={true}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="share your knowledge..."
              type="text"
              className="writeInput writeText"
              onChange={(e)=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }