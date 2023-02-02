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
        <div className="d-flex justify-content-evenly top-nav">
          <div className="mt-3">
          <a href="/devlist" className="h-anch">
            <h2 className="">Developers List</h2>
            </a>
          </div>
          <div>
            <a href="/" className="h-anch">
              <h2 className="mt-3">Logout</h2>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-2 text-white">
          <div className=" d-inline-flex flex-column sidenav mt-3 ">
            <div className="picture mt-5 rounded-circle">
              <img alt="pic"></img>
            </div>
            <div className="text-dark">
              <h2 className="navtitle">Users Name</h2>
            </div>
            <div className="sidenav-option">
              <h3>
                <Link
                  to=""
                  className="text-grey dev-list rounded pt-2 pb-2 ps-2 pe-2"
                >
                  {" "}
                  Summary{" "}
                </Link>
              </h3>
              <h3>
              
              </h3>
              <h3>
                <Link to={`/contact/${id}`} className="text-white contact ms-2">
                  Contact
                </Link>
              </h3>
            </div>
          </div>
          <div className="">
            
              return (
                <div className="d-sm-flex align-items-center p-5">
                  <div>
                  <img className="border border-dark" src={user.devPicture}/>                 
                   </div>
                  <div className="p-3 mb-2">
                    <ul>
                      <li
                        key={user._id}
                        className="nav border  text-dark border-dark col-6"
                      >
                        {user.Fname} {user.Lname}
                      </li>
                      <textarea
                        name=""
                        id=""
                        rows="4"
                        placeholder="summary"
                      ></textarea>
                    </ul>
                  </div>
                </div>
              );
          
          </div>
          <div>
            <div className="sum">
              <h1>Summary</h1>
            </div>
            <div>
              <ul className="sum-par pt-1 pb-1">
                <li>
                  {user.devSummary}
                </li>
              </ul>
            </div>
            <div className="tools">
              <h1>{user.devTools}</h1>
            </div>
          </div>
          <div>
            <p className="text-dark">Filter by: Language a-z</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Summary;
