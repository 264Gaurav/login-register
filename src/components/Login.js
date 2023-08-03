// src/components/LoginForm.js
import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';


const LoginForm = ( {setLoginUser} ) => {

    const history=useHistory();
  
    const[user,setUser]=useState({
      email:'',
      password:'',
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
    // Implement your login logic here
    const {email,password}=user;
    //validation
    if(email && password){
      axios.post("http://127.0.0.1:4000/login" , user)
      .then( (res)=>{
        alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/");
      })
      .catch(err=>console.log(err))
    }


    console.log('Login form submitted');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {console.log("User Login = " , user)}
      <form className="w-96 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
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
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
