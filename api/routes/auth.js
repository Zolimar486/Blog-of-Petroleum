const router = require("express").Router();
const User = require("../models/User");
const bcrypt= require('bcrypt');
const {cloudinary} = require('../utils/cloudinary')

//REGISTER

router.post("/register", async (req, res) => {

    const {username, email, password, profilePic} = req.body ;


    try {
      
      const salt = await bcrypt.genSalt(10);
      const hashedPass= await bcrypt.hash(req.body.password, salt);

      if(profilePic){
        const uploadRes= await cloudinary.uploader.upload(profilePic, {
            upload_preset:"project",
        });


        if(uploadRes){
          const newUser = new User({
              username,
              email,
              password:hashedPass,
              profilePic:uploadRes,
          })

          const saveUser = await newUser.save()
          res.status(200).json(saveUser)
       }

        
  

      }


     
    } catch (err) {
      res.status(500).json(err);
    }
  });

//LOGGIN


router.post('/login', async(req,res) => {
     try{
       const user = await User.findOne({username:req.body.username})
       if(!user)
        {
            return res.status(400).json("wrong credentials")
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated)
        {
            return res.status(400).json("wrong credentials");
        }
          

        const {password, ...others} =user._doc;

        res.status(200).json(others);


     }
     catch(err){
       res.status(500).json(err);
     }
});

module.exports=router