import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SinglePost = () => {

    let [content, setContent] = useState([])
    let [loader, setLoader] = useState(true)
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/posts/${params.id}`)
            let postData = response.data
            setContent(postData)
            setLoader(false)
        }
        fetchData()
    }, [])

    return (
        <div className="readmore">
            <Navbar/>
            <div className="loader text-center">
                {loader && <img src="https://i.gifer.com/ZZ5H.gif" alt="" />}
            </div>
            <div className="d1   bg-dark bg-opacity-25 mx-5 mt-4 d-flex justify-content-center">
                <div className="postImage">
                    <img height={"720px"} width={"500px"}  src={content.image} alt="" />
                </div>
                <div className="img my-4 mx-4">
                    <h1>{content.title}</h1>
                    <p>Written By:{content.author}</p>
                    <p>{content.summary}</p>
                    <iframe src={content.location} width="400" height="400" frameborder="0"></iframe>
                </div>
            </div>

            <div className=" text-center">
                <Link to='/posts' className="btn  btn-dark btn-lg rounded-1 my-4"> &lt; Go back toPosts</Link>
            </div>

            <Footer/>

        </div>
    );
}

export default SinglePost;