// src/components/RegisterForm.js

import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const history=useHistory();

  const[user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleChange= e =>{
    const{name,value}=e.target;
    //console.log(name,value);
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,confirmPassword}=user
    //validation
    if(name && email && password && password && confirmPassword ){
      if(password===confirmPassword){
        axios.post("https://login-reg-server.onrender.com/register" , user)
      .then((res)=>{
        console.log(res);
        history.push('/login');
        alert(res.data.message);
      })
      .catch((err)=>{
        console.log(err)
        alert("Can't register,user already exist")
      })
      
      }
      else{
        alert("Password and confirm password are not same.")
      }
    }
    else{
      alert("invalid Input.");
    }
    
    // Implement your registration logic here
    console.log('Registration form submitted');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {console.log("user = " , user)}
      <form className="w-96 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Register</h2>

        <div className="mb-2">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name='name'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name='email'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name='password'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="confirmPassword" className="block font-semibold mb-2">
            confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name='confirmPassword'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Re-Enter your password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600" >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
