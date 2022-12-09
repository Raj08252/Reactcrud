import React, { useState,useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Home=()=>
{
    const [users,setusers]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        loadusers();
    },[]);
    const loadusers=async ()=>
    {
        const result=await axios.get("http://localhost:3001/users");
        setusers(result.data.reverse());
    }
    const deleteuser= async id=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadusers();
    }
return(
    <>
    <center><h1>Users data:</h1></center>
    <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <>
            <tr>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
             <Link className="btn btn-primary mr-2" to={`/users/user/${user.id}`}>View</Link>
             <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
             <Link className="btn btn-danger mr-2" onClick={()=>deleteuser(user.id)}>Delete</Link>       
            </td>
            </tr>
            </>
        ))
    }
  </tbody>
</table>


    </>
)
}
export default Home;