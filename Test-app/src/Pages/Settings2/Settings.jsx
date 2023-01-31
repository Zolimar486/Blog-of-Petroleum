import './settings.css';
import Sidebar from '../../Components/Sidebar/SideBar';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'


export default function Settings(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("")
    const {user, dispatch} = useContext(Context)
    const [success, setSuccess] = useState(false)
    const [profilePicture, setProfilePicture] = useState("")


    const handleUpload = (e) => {
        const file = e.target.files[0]

        TransformFile(file)

    }

    const TransformFile = (file)=> {
    
      const reader = new FileReader()

      if(file){
         reader.readAsDataURL(file)
         reader.onloadend = ()=> {
            setProfilePicture(reader.result)
         }
         

      }else{
        setProfilePicture("")
      }

      

    }

    
     


    const handleSubmit= async(e) => {

        e.preventDefault();
        dispatch({type:"UPDATE_START"})

        const updateUser = {
            userId: user._id,
            email,
            password,
            profilePic: profilePicture

        
            
        }

        
        
        try{
           const res= await axios.put(`/users/${user._id}`, updateUser) 
            setSuccess(true)
            dispatch({type:"UPDATE_SUCCESS", payload:res.data})

            console.log(res.data)
            
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
          
        }
       
        
    }

   



    return(
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
               
            </div>

            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    { profilePicture? (
                      <img src={  profilePicture } alt=''/>)
                      :(<div className="section">
                      <span dclassName="span"> Preview Will Appear</span>
                     </div>)
                      
                    }
                    <label htmlFor='fileInput'>
                        <i className=" settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" accept="image/" style={{display:"none"}} 
                    onChange={handleUpload}/>
                </div>
                
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value) } required />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}> Profile has been updated..</span>}
            </form>
        </div>
        
    </div>
    )
}