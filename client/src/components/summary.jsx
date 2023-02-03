import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../developerlist.css";
import "../summary.css";

const Summary = () => {
  const navigate = useNavigate();
  const [allusers, setAllUsers] = useState([]);
  const [userkey, setuserkey] = useState([]);
  const [user, setuser] = useState({});
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/oneuser/${id}`)
    .then((res)=>{
      setuser(res.data)
      console.log(res.data._id)
    }).catch((err)=> {
      console.log(err)
    });
  },[]);

  return (
    <div>
      <form className="">
      <div className=".flex-lg-row p-1 d-flex justify-content-around align-items-center bg-warning">
          <div className="mt-3">
            <a href="/jobavailable" className="h-anch">
              <h2>Job Search</h2>
            </a>
          </div>
          <a href="/devlist" className="mt-3 log rounded pt-2 pb-2 ps-2 pe-2"><h2>Developers List</h2></a>
          <a href="/" className="h-anch">
            <h2>Login</h2>
          </a>
        </div>
        <div className="d-flex">
          <div className=" d-inline-flex flex-column sidenav " width="350">
            <h2 className="navtitle">{user.Fname} {user.Lname}</h2>
            
            <img className=" d-flex " src={user.devPicture} width="200" height="200" />   
           
              <h3>
                <Link to={`/contact/${id}`} className="text-white contact ms-2">
                  Contact {user.Fname}
                </Link>
              </h3>
          </div>

          <div>
            <div className="sum">
              <h1>Summary</h1>
            </div>
            <div>
                  <h4>{user.devSummary}</h4>
            </div>
            <div><h1>Developer Tools</h1></div>
            <div className="tools">
              <h4>{user.devTools}</h4>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Summary;
