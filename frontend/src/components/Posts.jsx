// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Banner from "./Banner";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Footer from "./Footer";

// const Posts = () => {

//     let title1 = "All Posts"

//     let [posts, setPosts] = useState([])

//     let [loader, setLoader] = useState(true)

//     useEffect(() => {
//         let fetchData = async () => {
//             let response = await axios.get('http://localhost:4000/posts')
//             let postData = response.data
//             console.log(postData);
//             setPosts(postData)
//             setLoader(false)
//         }
//         fetchData()
//     })


//     return (
//         <div className="main">

//             <Navbar />

//             <Banner data={title1} />

//             <h1 className="mt-4 mb-0  text-danger text-opacity-100 text-center">All Posts</h1>

//             <div className="loder text-center">
//                 {loader && <img src="https://i.gifer.com/ZZ5H.gif" alt="" />}
//             </div>



//             <div className="postss ">


//                 {posts.map((data) => (


//                     <div className="main d-inline-block">

//                         <div className="post align-items-center justify-content-center  ms-5 me-2 my-5">
//                             <img src={data.image} width="350" height="350" alt="" />
//                             <div className="d1">
//                                 <h2>{data.titlle}</h2>
//                                 <h4>-written by {data.author}</h4>

//                                 <Link to={`/posts/${data._id}`} className="btn btn-warning" id="bsk">Read More &#8674;</Link>

//                             </div>
//                         </div>
//                         <h5 className=" m-0 p-0 text-center text-danger">Number of posts : {posts.length}</h5>

//                         <Footer />

//                     </div>


//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Posts;

import { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Posts = () => {

    let title = "All Posts"

    let [posts, setPosts] = useState([])

    let [loder, setloder] = useState(true)


    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/posts")
            let postData = response.data
            console.log(postData);
            setPosts(postData)
            setloder(false)
        }
        fetchData()
    }, [])



    return (
        <div className="main">

            <Navbar/>
            <Banner data={title}/>
            <h1 className="mt-4 mb-0  text-danger text-opacity-100 text-center">All Posts</h1>

            <div className="loder text-center">
                {loder && <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />}
            </div>

            <div className="postss ">


                {posts.map((data) => (


                    <div className="main d-inline-block">

                        <div className="post align-items-center justify-content-center  ms-5 me-2 my-5">
                            <img src={data.image} width="350" height="350" alt="" />
                            <div className="d1">
                                <h2>{data.titlle}</h2>
                                <h4>-written by {data.author}</h4>

                                <Link to={`/posts/${data._id}`} className="btn btn-warning" id="bsk">Read More &#8674;</Link>

                            </div>
                        </div>


                    </div>


                ))}
            </div>


            <h5 className=" m-0 p-0 text-center text-danger">Number of posts : {posts.length}</h5>

            <Footer/>
        </div>
    );
}

export default Posts;