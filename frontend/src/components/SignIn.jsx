import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignIn = () => {

    let email=useRef()
    let password=useRef()

    let navigate=useNavigate();

    let login=(e)=>{
        e.preventDefault()
        let data={
            email:email.current.value,
            password:password.current.value
        }
        axios.post('http://localhost:4000/signin',data)
        .then((res)=>{
            alert(res.data.message)
            if(res.data.message == "login successful"){
                navigate('/home')
            }
        })

    }


    return (
        <div className="signIn w-50" style={{margin:"7rem",marginLeft:"25rem"}}>
            <div className="signInForm mx-3 d-flex d-flex justify-content-center m-5 align-items-center  shadow  rounded-5 ">
                <div className="signInimage text-center m-5">
                    <img src="./images/signin-image.jpg" alt="" /> <br />
                    <Link to='/signUp' className="text-dark " >Create an account</Link>
                </div>
                <div className="signForm w-100 mx-5 my-5">
                    <h1>Sign In</h1>
                    <form action="" onSubmit={login}>
                    <div className="email my-3">
                            <input type="email" ref={email} name="email" placeholder='Your Email' className='form-control w-500' />
                        </div>
                        <div className="password my-3">
                            <input type="password" ref={password} name="password" placeholder='Password' className='form-control w-500' />
                        </div>
                        <button className='btn btn-primary btn-lg my-3  px-3 py-2'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;