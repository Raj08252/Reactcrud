// import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import About_us from "./Components/Pages/About_us";
import Contact_us from "./Components/Pages/Contact_us";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Notfound from "./Components/Pages/Notfound";
import "./index.css";
import Adduser from "./Components/Users/Adduser";
import Edituser from "./Components/Users/Edituser";
import User from "./Components/Users/User";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <div className="py-4">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About_us/>}/>
              <Route exact path="/contact" element={<Contact_us/>}/>
              <Route exact path="/users/add" element={<Adduser/>}/>
              <Route exact path="/users/edit/:id" element={<Edituser/>}/>
              <Route exact path="/users/user/:id" element={<User/>}/>
              <Route path="/*"  element={<Notfound/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};
export default App;
