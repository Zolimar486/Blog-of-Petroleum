const router= require('express').Router();
const {cloudinary} = require('../utils/cloudinary')
const User = require('../models/User');
const Post = require('../models/Post');

//CREATE POST
router.post('/', async(req,res)=> {
    
    const {title, desc, photo, username} = req.body;

        try{

            if(photo){
                const uploadRes= await cloudinary.uploader.upload(photo, {
                    upload_preset:"project",
                });
        
                if(uploadRes){
                    const newPost = new Post({
                        title,
                        desc,
                        username,
                        photo:uploadRes,
                    })
        
                    const savePost = await newPost.save()
                    res.status(200).json(savePost)
                }
            }
        

        }catch(err){
            res.status(500).json(err)
        }

})

//UPDATE POST

router.put('/:id', async (req,res)=> {

    try{
        const post= await Post.findById(req.params.id)
    if(req.body.username === post.username){
        try{
            const updated= await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updated)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(404).json('you can only update your post')
    }
   }catch(err){
       res.status(500).json(err)
   }

})

//DELETE

router.delete('/:id', async(req,res)=> {

    try{
        const post= await Post.findById(req.params.id)

    if(req.body.username === post.username){
        try{
            await post.delete();
            res.status(200).json('The post has been deleted!')
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(404).json('you can only delete yor post!')
    }
    }catch(err){
        res.status(500).json(err)
    }

})

//GET
router.get('/:id', async(req,res)=> {
    try{
        const post= await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL POSTS

router.get('/', async (req,res)=> {
    const username= req.query.user;
    const catName= req.query.cat;

    try{
        let posts;
        if(username){
             posts= await Post.find({username});
        }else if(catName){
            posts= await Post.find({categories:{
                $in:[catName],
            }})
        }else{
            posts= await Post.find();
        }
        res.status(200).json(posts)
        
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports= router;
