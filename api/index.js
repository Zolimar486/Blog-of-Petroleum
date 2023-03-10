const express = require("express");
const cors= require("cors")
const path = require("path")

const app= express();
app.use(cors());
app.options('*', cors());

const mongoose = require('mongoose');

const dotenv= require('dotenv');
mongoose.set('strictQuery', false);


dotenv.config();
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: true , limit:'50mb'}));
app.use(express.static(path.join(__dirname, 'build')));





const authRoute = require('./routes/auth');
const userRoute= require('../api/routes/user')
const postRouter= require('../api/routes/post');
const categoryRoute= require('../api/routes/categories');



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=> console.log('I finally made it up thank God, connecting my cruster with Node'))
.catch((err)=> console.log(err));




const PORT = 5000


app.use("/api/auth", authRoute);
app.use('/api/users', userRoute)
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRoute);

app.get('/', async(req,res) => {
    res.status(200).json({message:"Hello from Server"})
})

app.listen(PORT, ()=> {
    console.log(`Server Running on Port: http://localhost:${PORT}`)
    console.log('A Good oportunity give by my powerful God')
} )