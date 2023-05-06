import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
           <div className="logo">
                <img height="100px"src="./images/logo.jpg" alt="" />
            </div>
            <div className="links d-flex  ">
                <Link style={{textDecoration:"none"}} to={'/home'} >Home</Link>
                <Link style={{textDecoration:"none"}} to={'/about'}>About</Link>
                <Link style={{textDecoration:"none"}} to={'/posts'}>Foods</Link>
                <Link style={{textDecoration:"none"}} to={'/addpost'} >Add Post</Link>
                <Link style={{textDecoration:"none"}} to={"/"}>Logout</Link>
            </div> 
        </div>
     );
}
 
export default Navbar;