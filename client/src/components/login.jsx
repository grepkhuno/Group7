import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";
import "../login.css";

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [users, setusers] = useState('')
    

  const navigate = useNavigate();

    const submithandler = (e) => {
      e.preventDefault()
      axios.post("http://localhost:8000/api/login",{
        Email,
        password
      },{withCredentials:true})
      .then((res)=>{
        console.log(res.data.user);
        navigate(`/user/${res.data.user._id}`)
      }).catch((err)=>{
        console.log(err.response.data)
        setErrors(err.response.data.message)
      });
    };
  return(
    <div>
      <div className="d-flex justify-content-evenly top-nav">
        <div className="mt-3">
          <a href="/devlist" className="h-anch">
            <h2>Developers List</h2>
          </a>
        </div>
        <div>
          <h2 className="mt-3 log rounded pt-2 pb-2 ps-2 pe-2">Login</h2>
        </div>
      </div>
      <div className="sub mt-5">
        <form onSubmit={submithandler} className="">
          <div className="form-label">
            <label className="form-label">
              Email:
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                type="text"
              />
            </label>
          </div>

          <div className="form-label">
            <label className="form-label">
              Password:
              <input
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="text"
              />
            </label>
          </div>
          {errors ? (
            <p className="validations alert" style={{ color: "red" }}>
              {errors}
            </p>
          ) : null}
          <a href="/register" className="d-flex justify-content-end">
            Register
          </a>
          <button className="btn btn-info mt-3 btn-css ">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
