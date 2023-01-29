import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const submithandler = (e) => {
      e.preventDefault()
      axios.post("http://localhost:8000/api/login",{
        Email,
        password
      },{withCredentials:true})
      .then((res)=>{
        console.log(res);
        navigate('/meals')
      }).catch((err)=>{
        console.log(err)
        setErrors(err.response)
      });
    };
  return(
    <div>
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="/devlist" role="tab"
        aria-controls="pills-login" aria-selected="true">Developers List</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link active" id="tab-register" data-mdb-toggle="pill" href="/" role="tab"
        aria-controls="pills-register" aria-selected="false">Login</a>
    </li>
  </ul>
      <form onSubmit={submithandler} className="">
        <div>
          <h1>Login</h1>
        </div>
      <div className="form-label">
              <label className='form-label'>Email: 
              <input className="form-control"
                onChange={(e) =>setEmail(e.target.value)}
                name="Email"
                type="text"
              />
              </label>
            </div>

            <div className="form-label">
              <label className='form-label'>Password:
              <input className="form-control"
                onChange={(e) =>setPassword(e.target.value)}
                name="password"
                type="text"
              />
              </label>
            </div>
            {errors ? <p className="validations alert" style={{color: 'red'}}>{errors}</p> : null}
            <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="/register" role="tab"
        aria-controls="pills-login" aria-selected="true">Register</a>
            <button className='btn btn-info mt-3'>Login</button>
      </form>
    </div>

  );
};

export default Login