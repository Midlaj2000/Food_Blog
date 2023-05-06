import Navbar from "./Navbar";

const Home = () => {
    return (
     <div className="home">
        <Navbar/>

        <div className="home d-lg-flex d-sm-block" style={{ height: "600px" }}>
                <div className="one" style={{ height: "100%", width: "100%" }}>
                    <img style={{ height: "100%", width: "100%" }} src="./images/4.jpeg" alt="" />
                </div>
                <div className="two bg-warning ps-4 pt-4 pb-4 pe-4">
                    <p style={{ fontFamily: "times new roman", fontSize: "35px" }}>Feautured posts</p>
                    <h1 style={{ fontFamily: "times  new roman", fontWeight: "bolder", fontSize: "75px" }}>love the Delicious and tasty foods</h1>
                    <hr />
                    <p style={{ fontFamily: "times new roman", fontSize: "25px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur, quod, laudantium hic unde aperiam itaque rem consequuntur mollitia quasi temporibus veniam ea ex doloremque laborum, illo quibusdam nostrum?</p>
                    <button className="btn btn-outline-dark">Add a post  <i class="fa-solid fa-arrow-right"></i></button>
                    <div className="but d-lg-flex d-sm-block mt-4">
                        <div className="lbut mt-4">
                            <button style={{ border: "1px solid black", height: "80px", width: "450px" }}><i class="fa-sharp fa-solid fa-arrow-left "></i>Forward</button>
                        </div>
                        <div className="rbut mt-4">
                            <button style={{ border: "1px solid black", height: "80px", width: "450px" }}>Next<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont">
                <h1 className="mt-4" style={{ fontFamily: "times new roman", color: "black" }}>Recent Stories</h1>
                <div className="inform d-lg-flex d-sm-block overflow-scroll">
                    <div className="first ">
                        <img width={"300px"} height={"250px"} src="./images/1.jpeg" alt="" />
                        <p>Dessert------------March 01, 2018</p>
                        <h4 style={{ fontFamily: "times new roman", color: "black" }}>Tasty and Delicious Food</h4>
                        <button className="btn btn-outline-dark" style={{ border: "none" }}>Read More<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="second ms-4">
                        <img width={"300px"} height={"250px"} src="./images/2.jpeg" alt="" />
                        <p>Dessert------------March 01, 2018</p>
                        <h4 style={{ fontFamily: "times new roman", color: "black" }}>Tasty & Delicious Foods from <br /> Scotland</h4>
                        <button className="btn btn-outline-dark" style={{ border: "none" }}>Read More<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="three ms-4">
                        <img width={"300px"} height={"250px"} src="./images/3.jpeg" alt="" />
                        <p>Dessert------------March 01, 2018</p>
                        <h4 style={{ fontFamily: "times new roman", color: "black" }}>Tasty & Delicious Food</h4>
                        <button className="btn btn-outline-dark" style={{ border: "none" }}>Read More<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="four ms-4">
                        <img width={"300px"} height={"250px"} src="./images/5.jpeg" alt="" />
                        <p>Dessert------------March 01, 2018</p>
                        <h4 style={{ fontFamily: "times new roman", color: "black" }}>Tasty & Delicious Food</h4>
                        <button className="btn btn-outline-dark" style={{ border: "none" }}>Read More<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="five ms-4">
                        <img width={"300px"} height={"250px"} src="./images/8.jpeg" alt="" />
                        <p>Dessert------------March 01, 2018</p>
                        <h4 style={{ fontFamily: "times new roman", color: "black" }}>Tasty & Delicious Food</h4>
                        <button className="btn btn-outline-dark" style={{ border: "none" }}>Read More<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

     </div>
     );
}
 
export default Home;