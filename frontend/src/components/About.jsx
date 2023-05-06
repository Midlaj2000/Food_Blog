import { useEffect, useState } from 'react';
import '../styles/about.css'
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const About = () => {
    let title = "about page"

    let [users,setUsers]=useState([])

    let [foods,setFoods]=useState([])

    useEffect(()=>{
        let fetchData = async () =>{
            const res=await axios.get("http://localhost:4000/signup")
            const res2=await axios.get("http://localhost:4000/posts")

            const data=await res.data
            const data2=await res2.data

            setUsers(data)
            setFoods(data2)
        }
        fetchData()
    })

    return (



        <div className="about">
            <Navbar/>

            <Banner data={title} />

            <div className="left ms-5">
                <img style={{ width: "40rem" }} src="./images/about.jpg.webp" alt="" />
            

                <div className="content">
                    <h1 className="mt-3 ms-5 mb-3">About Stories</h1>
                    <h5 className="ms-5 mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>



                    <div className="blocks ms-4"> 

                       
                       <div className="c1">
                            <h1>10</h1>
                            <h5>years of Experienced</h5>
                        </div>
                      

                        <div className="c1">
                            <h1>{foods.length}</h1>
                            <h5>Foods</h5>
                        </div>

                        <div className="c1">
                            <h1>300</h1>
                            <h5>LifeStyle</h5>
                        </div>


                        <div className="c1">
                            <h1>{users.length}</h1>
                            <h5>Happy Customers</h5>
                        </div>

                    </div>


                </div>
            </div>
            
           <Footer/>
            
        </div>

    );
}

export default About;