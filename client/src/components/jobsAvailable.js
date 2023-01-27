import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Jobs = (props) => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [errors, setErrors] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get(`https://data.usajobs.gov/api/search`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   });

  return (
    <div>
      <div className="container">
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </form>
          <hr />
          {/* {allJobs.map((job, i) => (
            <div key={i}>
              <h3>Job Title</h3>
              <h5>Job Location</h5>
              <h6>Job Description</h6>
              <a href="#"></a>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
