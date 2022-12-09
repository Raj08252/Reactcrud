import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import {Link,useParams } from 'react-router-dom';
const User =()=>
{
    const {id}=useParams();
    const [user,setuser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    // const {name,username,email,phone,website}=user;
    // alert(id);
    const loaduser= async()=>
    {
   const res=await axios.get(`http://localhost:3001/users/${id}`);
//    console.log(res.data);
setuser(res.data);
    }
    useEffect(()=>
    {
        loaduser();
    },[]);
    return (
        <>
        <div className="container">
         <Link className="btn btn-primary" to="/">Back to home</Link>
         <h1 className="display-4">User Id:{id}</h1>

         <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">I.D</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
            <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            </tr>
  </tbody>
</table>




        </div>
        </>
    );
}
export default User;