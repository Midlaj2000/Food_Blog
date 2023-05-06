
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import About from './components/About';
import Addpost from './components/AddPost';
import Posts from './components/Posts';
import SinglePost from './components/singlePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/addpost' element={<Addpost/>} />
          <Route element={<Posts />} path='/posts' />

          <Route element={<SinglePost/>} path='/posts/:id'/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
