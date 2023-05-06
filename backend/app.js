const express=require('express')
const app= express()
const cors=require('cors') //cross orgin resource sharing -->npm i cors

const port=4000

const mongoose=require('mongoose')


//require mongoose models

//require user model
const User=require('./model/signup')

//require post model
const Post=require('./model/addpost')


const dbUrl='mongodb://localhost:27017/foodBlog'
mongoose.connect(dbUrl).then(()=>{
    console.log("connect to database...!!");
})

//middleWares-->runs between req and res
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//sign Up
app.post('/signup',async(req,res)=>{
    //findOne=>used to check user Existence
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            res.send({message:"User already Exist"})
        }
        else{
            let userData=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            userData.save().then(()=>{
                res.send({message:"User Registered successfully "})
            }).catch((err)=>{
                res.send(err)
            })

            // userData.save(()=>{
            //     if(err){
            //         res.send(err)
            //     }
            //     else{
            //         res.send({message:"User Registered Successfully"})
            //     }
            // })
        }
    })
})


//signin

app.post('/signin',(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            if (req.body.password == userData.password) {
                res.send({message:"login successful"})
                
            } else {
                res.send({message:"login failed"})
            }
        }else{
            res.send({message:"User not found"})
        }
    })
})

//get signUp----->no.of happy customers
app.get('/signup',async(req,res)=>{
    try{
        const posts=await User.find()
        res.json(posts)
    } catch(err){
        console.log(err);
    }

})


//add post

app.post('/addpost',async(req,res)=>{
    let postData=new Post({
        title:req.body.title,
        author:req.body.author,
        image:req.body.image,
        summary:req.body.summary,
        location:req.body.location
    })
    postData.save().then(()=>{
        res.send({message:'Post added successfully'})
    }).catch((err)=>{
        res.send({message:"Error while adding post"})
    })
})


//posts
app.get('/posts',async(req,res)=>{
    //using mongoDb method ie,find()
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        console.log(error);
    }
})

//single Post
app.get('/posts/:id',async(req,res)=>{
    //const postid=req.params.id
    const {id}=req.params

    try{
        const posts=await Post.findById(id)
        res.send(posts)
    }catch(err){
        console.log(err);
    }
    

})


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})