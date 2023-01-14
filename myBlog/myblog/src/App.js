import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.js"
import Signup from "./components/SignUp.js"
import Login from "./components/Login.js"
import BlogSave from "./components/BlogSave.js"
import ShowBlogs from "./components/ShowBlogs.js"




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
       
        <Route exact path="/" element= {<Signup/>}/>
        <Route exact path="/login" element= {<Login/>}/>
        <Route exact path="/blogSave" element= {<BlogSave/>}/>
        <Route exact path="/showBlogs" element= {<ShowBlogs />}/>
        
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
