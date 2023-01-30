import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const ToolsList = (props) => {
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
      <div className="test">
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
          <h2>TOOLS</h2>
        </div>
        <div>
          <ul>
            <li>{oneDev.devTools[0]}</li>
            <li>{oneDev.devTools[1]}</li>
            <li>{oneDev.devtools[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ToolsList;
