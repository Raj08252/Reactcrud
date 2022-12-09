import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link,useNavigate,useParams } from 'react-router-dom';
const Edituser=()=>
{
    const navigate = useNavigate();
    const {id}=useParams();
    // alert(id);
    console.log();
    const [user, setuser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    });
    const { name, username, email, phone, website } = user;
    const Oninputchange = e => {
     setuser({...user,[e.target.name]:e.target.value});
    };
  const onSubmit=async e=>
  {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`,user);
    navigate('/');
  }
  const loaduser=async ()=>{
   const result= await axios.get(`http://localhost:3001/users/${id}`);
   setuser(result.data)
//    console.log(result.data);
  }
  useEffect(()=>{
    loaduser();
  },[]);
    return (
      <>
        <div className="container">
        <Link className="btn btn-primary" to="/">Back to home</Link>
          <div className="w-75 mx-auto shadow p-5">
            <h1 className="text-center mb-4">Edit user:</h1>
            <form onSubmit={e=>onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={e => Oninputchange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={e => Oninputchange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={e => Oninputchange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your phone"
                  name="phone"
                  value={phone}
                  onChange={e => Oninputchange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your website"
                  name="website"
                  value={website}
                  onChange={e => Oninputchange(e)}
                />
              </div>
              <button className="btn btn-warning btn-block">Edit User</button>
            </form>
          </div>
        </div>
      </>
    );
} 
export default Edituser;