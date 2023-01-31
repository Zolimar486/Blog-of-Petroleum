const mongoose= require('mongoose');

const PostSchema= new mongoose.Schema({
   title:{
       type:String,
       required:true,
       unique:true,
   },

   desc:{
       type:String,
       required:true,
   },

   photo:{
       type: Object,
       required:true,
   },

   username:{
       type:String,
       required:true,

   },

   categories:{
       type: Array,
       required:false,
   },
}, 
{timestamps: true}
);

module.exports= mongoose.model('Post', PostSchema)