import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../personalInfo.css";

function PersonalInfo() {
  const { id } = useParams();
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [devPicture, setdevPicture] = useState("");
  const [devSummary, setdevSummary] = useState("");
  const [devTools, setdevTools] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/oneuser/${id}`)
      .then((res) => {
        setuser(res.data);
        setFname(res.data.Fname);
        setLname(res.data.Lname);
        setdevPicture(res.data.devPicture);
        setdevSummary(res.data.devSummary);
        setdevTools(res.data.devTools);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitLname = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/updateuser/${id}`,
        {
          Fname,
          Lname,
          devPicture,
          devSummary,
          devTools,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate(`/summary/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  };

  const homebtn = () => {
    navigate("/");
  };

  const deleteone = (e) => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:8000/api/deleteuser/${id}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className=".flex-lg-row p-1 d-flex justify-content-around align-items-center bg-warning pb-3 pt-3">
        <a href="/devlist" className="h-anch">
          <h2 className="">Developers List</h2>
        </a>
        <a href="/" className="h-anch">
          <h2>Login</h2>
        </a>
      </div>

      <div className="d-flex">
        <div className=" d-inline-flex flex-column bg-primary">
          <div className="text-dark">
            <h2 className="ps-3 pe-3 mt-2">Personal Information</h2>
          </div>
        </div>

        <div className="personal-info-main">
          <div className="">
            <form onSubmit={submitLname}>
              <div className="pb-3">
                <h1>Welcome {Fname},</h1>
              </div>
              <div className="personal-info-form">
                <div>
                  First Name: <br></br>
                  <input
                    onChange={(e) => setFname(e.target.value)}
                    value={Fname}
                    name="Fname"
                    type="text"
                  />
                  {errors.Fname ? (
                    <p className="validations alert" style={{ color: "red" }}>
                      {errors.Fname.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  Last Name:<br></br>{" "}
                  <input
                    onChange={(e) => setLname(e.target.value)}
                    value={Lname}
                    name="Lname"
                    type="text"
                    placeholder={user.Lname}
                  />
                  {errors.Lname ? (
                    <p className="validations alert" style={{ color: "red" }}>
                      {errors.Lname.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  Picture: <br></br>
                  <input
                    onChange={(e) => setdevPicture(e.target.value)}
                    value={devPicture}
                    name="devPicture"
                    type="text"
                    accept="image/"
                  />
                  {errors.devPicture ? (
                    <p className="validations alert" style={{ color: "red" }}>
                      {errors.devPicture.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  Summary:<br></br>{" "}
                  <textarea
                    onChange={(e) => setdevSummary(e.target.value)}
                    value={devSummary}
                    name="Lname"
                    type="text"
                    rows={4}
                    placeholder={user.devSummary}
                  />
                  {errors.Lname ? (
                    <p className="validations alert" style={{ color: "red" }}>
                      {errors.Lname.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  Tools: <br></br>
                  <input
                    onChange={(e) => setdevTools(e.target.value)}
                    value={devTools}
                    name="devTools"
                    type="text"
                  />
                  {errors.devTools ? (
                    <p className="validations alert" style={{ color: "red" }}>
                      {errors.devTools.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <br></br>
              <div className="d-flex ms-4">
                <button onClick={submitLname}> Update</button>
                <button onClick={deleteone} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
