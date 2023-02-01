import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../jobsAvailable.css";

const Jobs = () => {
  const nav = useNavigate();
  const { id } = useParams;
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/oneuser/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var host = "data.usajobs.gov";
  var userAgent = "austinspam1996@gmail.com";
  var authKey = "eaTD3/DPHAKQ5TUjOcnjWm9Ux5VqT61UM1wsiReddwU=";

  const headers = {
    Host: host,
    "User-Agent": userAgent,
    "Authorization-Key": authKey,
  };

  useEffect(() => {
    axios
      .get(
        `https://data.usajobs.gov/api/search?PositionTitle=${title}&LocationName=${location}`,
        { headers: headers }
      )
      .then((res) => {
        console.log(res.data);
        setAllJobs(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://data.usajobs.gov/api/search?PositionTitle=${title}&LocationName=${location}`,
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.SearchResult.SearchResultItems);
        setTitle("");
        setLocation("");
        setAllJobs(res.data.SearchResult.SearchResultItems);
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div>
      <div className="top-nav-job pb-3 pt-3">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <a className="pro-jobSearch" href="/devlist">
                <h1>Developers List</h1>
              </a>
            </div>
            <div className="col">
              <h1 className="text-grey dev-list rounded pt-2 pb-2 ps-2 pe-2">
                Jobs Available
              </h1>
            </div>
            <div className="col">
              <a className="pro-jobSearch" href="/">
                <h1>Login</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form
          className="d-flex justify-content-center flex-column mt-5 ms-5"
          onSubmit={submitHandler}
        >
          <div className="input-group mb-3 w-25">
            {errors.title ? <p>{errors.title.message}</p> : null}
            <label
              className="input-group-text"
              id="inputGroup-sizing-default"
              htmlFor="title"
            >
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="input-group mb-3 w-25">
            {errors.location ? <p>{errors.location.message}</p> : null}
            <label
              className="input-group-text"
              id="inputGroup-sizing-default"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </div>
        </form>
        <hr />
        <div className="d-flex justify-content-center">
          <table className="table table-striped-columns border w-75">
            <thead>
              <tr>
                <th className="text-center">Position</th>
                <th className="text-center">Location</th>
                <th className="text-center">Description</th>
                <th className="text-center">Link</th>
              </tr>
            </thead>
            <tbody>
              {allJobs.length > 0 &&
                allJobs.map((job, i) => {
                  return (
                    <tr key={i}>
                      <td>{job.MatchedObjectDescriptor.PositionTitle}</td>
                      <td>
                        {job.MatchedObjectDescriptor.PositionLocationDisplay}
                      </td>
                      <td>
                        {job.MatchedObjectDescriptor.QualificationSummary}
                      </td>
                      <td>{job.MatchedObjectDescriptor.PositionURI}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
