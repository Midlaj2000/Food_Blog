import { Link,useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios"; //axios is an alternator for fetch

const SignUp = () => {

    let name=useRef()
    let email=useRef()
    let password=useRef()
    let confirmPassword=useRef()


    let navigate = useNavigate()

    let signUp = (e)=>{
        e.preventDefault()
        let data ={
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            confirmPassword:confirmPassword.current.value
        }

        

        if(data.name&&data.email&&data.password&&(data.password==data.confirmPassword)){
          axios.post('http://localhost:4000/signup',data)
          .then((res)=>{
            alert(res.data.message) //message from backend
            navigate('/') //navigate to sign in page
          })  
        }else{
            alert('Invalid Credentials')
        }
    }

    return (
        <div className="signUp w-50" style={{margin:"7rem",marginLeft:"25rem"}}>
            <div className="signUpForm mx-3 d-flex d-flex justify-content-center m-5 align-items-center  shadow  rounded-5 ">
                <div className="form w-100 mx-5 my-5  ">

                    <h1 className="fw-bolder">Sign up</h1>
                     <form action="" onSubmit={signUp}>
                        <div className="name my-3">
                            <input type="text" name="name" ref={name} className='form-control w-500' placeholder='Your Name' />
                        </div>
                        <div className="email my-3">
                            <input type="email" name="email" ref={email} placeholder='Your Email' className='form-control w-500' />
                        </div>
                        <div className="password my-3">
                            <input type="password" name="password" ref={password} placeholder='Password' className='form-control w-500' />
                        </div>
                        <div className="confirmPassword my-3">
                            <input type="password" name="confirmPassword" ref={confirmPassword} placeholder='Re-enter Password' className='form-control w-500' />
                        </div>
                        <button className='btn btn-primary btn-lg my-4 px-2'>Sign Up</button>
                    </form>
                </div>
                `
                <div className="signUpImage text-center mx-5">
                    <img src="./images/signup-image.jpg" alt="" /> <br />
                    <Link to='/' className="text-dark " >I am already a member</Link>
                </div>


            </div>


        </div>

    );
}

export default SignUp;