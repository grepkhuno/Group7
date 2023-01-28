import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const Summary = (props) => {
  const { id } = useParams();
  const [oneDev, setOneDev] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getDeveloperByID/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneDev(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div>
          <div>{oneDev.devName}</div>
          <div>{oneDev.devLastName}</div>
        </div>
        <div>
          <Link to={`/summary/${id}`}>Summary</Link>
          <br />
          <Link to={`/Tools/${id}`}>Tools</Link>
          <br />
          <Link to={`/Contact/${id}`}>Contact</Link>
        </div>
      </div>
      <div>
        <div>
          <h2>Summary</h2>
        </div>
        <div>
          <div>{oneDev.devSummary}</div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
