import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../developerlist.css";
import "../summary.css";

const DeveloperList = () => {
  const navigate = useNavigate();
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
        console.log(response.data);
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
        <div className="d-flex justify-content-evenly top-nav">
          <div className="mt-3">
            <h2 className="">Developers List</h2>
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
                <Link to="" className="text-white tool ms-4">
                  Tools
                </Link>
              </h3>
              <h3>
                <Link to="" className="text-white contact ms-2">
                  Contact
                </Link>
              </h3>
            </div>
          </div>
          <div className="">
            {allusers.map((user, index) => {
              return (
                <div className="d-sm-flex align-items-center p-5">
                  <div>
                    <p className="text-dark nav border border-dark p-4 bg-primary">
                      Picture of developer
                    </p>
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
            })}
          </div>
          <div>
            <div className="sum">
              <h1>Summary</h1>
            </div>
            <div>
              <ul className="sum-par pt-1 pb-1">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus nam maiores earum quod! Fugiat eligendi neque
                  voluptatum at perferendis similique facere magni libero quam
                  dolore dicta soluta, atque optio quisquam.
                </li>
              </ul>
            </div>
            <div className="tools">
              <h1>Tools</h1>
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

export default DeveloperList;
