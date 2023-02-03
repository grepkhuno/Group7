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
        setDevID(response.data._id);
        setAllUsers(response.data);
        setuserkey(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <form onSubmit={submithandler} className="">
        <div className=".flex-lg-row p-1 d-flex justify-content-around align-items-center bg-warning">
          <div className="mt-3">
            <a href="/jobavailable" className="h-anch">
              <h2>Job Search</h2>
            </a>
          </div>
          <h2 className="mt-3 log rounded pt-2 pb-2 ps-2 pe-2">
            Developers List
          </h2>
          <a href="/" className="h-anch">
            <h2>Login</h2>
          </a>
        </div>
        <div className="d-flex justify-content-between mb-2 text-white">
          <div className=" flex-column bg-primary ps-3">
            <div className="text-dark">
              <h2 className="mt-3">staffing company</h2>
            </div>
          </div>
          <div className="contact-dev">
            {allusers.map((user, index) => {
              return (
                <div className="d-sm-flex d-flex justify-content-center align-items-center p-5">
                  <div>
                    <Link className="m-2" to={`/contact/${user._id}`}>
                      Contact Developer
                    </Link>

                    <img className="border border-dark" src={user.devPicture} />
                  </div>
                  <div className="p-3 mb-2">
                    <ul>
                      <li
                        key={user._id}
                        className="nav border  text-dark border-dark col-6"
                      >
                        <div>
                          <Link to={`/summary/${user._id}`}>
                            {user.Fname} {user.Lname}
                          </Link>
                        </div>
                        <hr />
                        <div className="dev-list-summary ms-2 pb-2">
                          <div>Summary:</div>
                          <div>{user.devSummary}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeveloperList;
