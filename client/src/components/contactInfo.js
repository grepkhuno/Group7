import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const ContactInfo = (props) => {
  const { id } = useParams();
  const [oneDev, setOneDev] = useState({});
  const [oneDevCont, setOneDevCont] = useState({});

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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getContactByID/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneDevCont(res.data);
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
          <h2>CONTACT</h2>
        </div>
        <div>
          <h5>Name</h5>
          <br />
          <h6>{oneDev.devName}</h6>
          <br />
          <h5>Last Name</h5>
          <h6>{oneDev.devLastName}</h6>
          <br />
          <h5>Email</h5>
          <h6>{oneDevCont.email}</h6>
          <br />
          <h5>Comments</h5>
          <h6>{oneDevCont.comment}</h6>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
