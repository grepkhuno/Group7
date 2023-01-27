import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Jobs = (props) => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://data.usajobs.gov/api/search?PositionTitle=${PositionTitle}&LocationName=${LocationName}`
      )
      .then((res) => {
        console.log(res.data);
        setAllJobs(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
          <div>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {allJobs.map((job, i) => {
                  return (
                    <tr key={i}>
                      <td>{job.PositionTitle}</td>
                      <td>{job.LocationName}</td>
                      <td>{job.JobSummary}</td>
                      <td>{job.PositionURI}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
