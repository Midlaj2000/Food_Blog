
import "../styles/addPost.css"
import Banner from "./Banner";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



const Addpost = () => {

    let [summary,setSummary]=useState()
    let [author,setAuthor]=useState()
    let [title,setTitle]=useState()
    let [image,setImage]=useState()
    let [location,setLocation]=useState()

    let navigate=useNavigate()

    let title2 = "Add Post"


let addpost = (e)=>{
    e.preventDefault()
    let data = {title,summary,image,author,location}
    if (title == ""&&summary == ""&&location == "") {
        alert('please fill all the field')
    } else {
        axios.post('http://localhost:4000/addpost',data)
        .then((res)=>{
            alert(res.data.message) //message from backend
            navigate('./posts') //navigate to posts page
        }).catch((err)=>{
            alert(err.data.message)
        })

    }
}

    return (
        <div className="addpost">

            <Navbar/>
            <Banner data={title2}/>

            <div className="forms d-flex  align-content-between  justify-content-evenly">



                <div className="image">

                    <img className="" height="680px" width="500px" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />

                </div>



                <div id="form" className="form w-25 m-5">

                    <h1 id="orange" className="pb-2 mb-4">ADD POST</h1>

                    <form action="" onSubmit={addpost}>

                        <label for="exampleFormControlInput1" class="form-label">Author</label>
                        <div id="s1" class="mb-3">
                            <input type="name" class="ps-3 my-1 w-100 " id="exampleFormControlInput1234" placeholder="Author"  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <div id="s1" class="mb-3">
                            <input type="title" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Title of the Post" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>

                        <label for="exampleFormControlTextarea1" class="">Food Description</label>
                        <div id="s1" class="mb-3">
                            <textarea class="ps-3 my-1 w-100 " id="exampleFormControlTextarea1" rows="3" value={summary} onChange={(e)=>{setSummary(e.target.value)}} ></textarea>
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Image</label>
                        <div id="s1" class="mb-3">
                            <input type="url" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Image of the post" value={image} onChange={(e)=>{setImage(e.target.value)}}  />
                        </div>

                        <label for="exampleFormControlInput1" class="form-label">Location</label>
                        <div id="s1" class="mb-3">
                            <input type="iframe" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Location of the post" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
                        </div>

                        <div className="button">
                            <button  type="submit" className="btn  btn-warning bg-warning m-1">Submit Post</button>
                        </div>
                    </form>


                </div>


            </div>

        </div>
    );
}

export default Addpost;