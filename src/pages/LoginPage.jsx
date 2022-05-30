import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function LoginPage(){

    let navigate = useNavigate();

    function handleSubmit(e) {
      try {
        e.preventDefault();    
        let payload = {
          "username": e.target.username.value,
          "password": e.target.password.value
        };

        let final_payload = JSON.stringify(payload);

        if (!e.target.username.value) {
          toast.error("Username is required")
          throw new Error("username is required");
        } else if (!e.target.password.value) {
          toast.error("Password is required")
          throw new Error("Password is required");
        } else{
          fetch("http://localhost:3000/api/login",
          {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: final_payload
          }).then(
            (res) =>{
              console.log(res);
              let response = res.json();
              console.log(response);
              response.then((data)=>{
                console.log(response);
                if (data.hasOwnProperty('message')) {
                  toast.success("Successfully logged in, John!");
                  setTimeout(()=>{navigate('/home')}, 2500);
                  e.target.username.value = "";
                  e.target.password.value = "";
                }
                else{
                  toast.error("Wrong email or password. Please try again!");
                  throw new Error("Wrong email or password combination");
                }
              })

            });
          } 
          } catch (error) {
            console.log(error);
          }
      };
    
        return (
          <div className="wrapper">
            <ToastContainer/>
            <img src={logo} className="logo" alt="Logo" />
            <br/>
            <div className="col text-center">
              <h2 className="display-5">Login</h2>
            </div>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">Username</label>
                <input type="text" class="form-control" name="username" placeholder="Username" required aria-required="true" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" class="form-control" name="password" placeholder="password" required aria-required="true"/>
              </div>
              <br/>
              <div className="col text-center">
              <button className="btn btn-primary mb-3 ">ENTER</button>
              </div>
            </form>
          </div>
        );
}

export default LoginPage;