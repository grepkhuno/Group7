import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../developerlist.css";

const DeveloperList = () => {
  const navigate = useNavigate();
  const [devID, setDevID] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [userkey, setuserkey] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/getAllDevelopersList",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/meals");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allusers")
      .then((response) => {
        console.log("%%%%%%%%%%%%%%%%%" + response.data);
        setDevID(response.data._id);
        setAllUsers(response.data);
        setuserkey(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const contactDeveloperByID = (e) => {
    e.preventDefault();

    // navigate(`/contact/${id}`);
  };

  return (
    <div>
      <form onSubmit={submithandler} className="">
        <div className=".flex-lg-row p-1 d-flex justify-content-around align-items-center bg-warning">
          <h2 className="mt-3 log rounded pt-2 pb-2 ps-2 pe-2">Developers List</h2>
          <a href="/" className="h-anch">
            <h2>Login</h2>
          </a>
        </div>
        <div className="d-flex justify-content-between mb-2  text-white">
          <div className=" d-inline-flex flex-column bg-primary mt-3">
            <div className="text-dark">
              <h2>staffing company name</h2>
            </div>
            <div className="mt-5 ">
            </div>
          </div>
          <div className="">
            {allusers.map((user, index) => {
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
                        <div><Link to={`/summary/${user._id}`}>
                      {user.Fname} {user.Lname}
                      </Link>
                      </div>
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
            })}
          </div>
          <div>
            <p className="text-dark">Filter by: Language a-z</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeveloperList;
