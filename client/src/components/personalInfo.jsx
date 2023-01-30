import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function PersonalInfo() {

  const {id} = useParams()
  const [user, setuser] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/oneuser/${id}`)
    .then((res)=>{
      setuser(res.data)
      console.log(res);
    }).catch((err)=>{
      console.log(err)

    });
  },[]);

  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [devPicture, setdevPicture] = useState("");
  const [devSummary, setdevSummary] = useState("");
  const [devTools, setdevTools] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        devPicture,
        devSummary,
        devTools  
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/devlist`)
      })
      .catch((err) => {
        console.log(err.response.data.err)
        setErrors(err.response.data.err.errors)
      });
  };

  return (
    <div>
    <h1>personalInfo</h1>
    <div>Welcome, {user.Fname} please add some more information about yourself</div>
    <div>
      <form onSubmit={handleSubmit}>
      <label>Picture: <input onChange={(e) => setdevPicture(e.target.value)}
                value={devPicture}
                name="devPicture"
                type="text" />
          </label>
          <label>Summary: <input onChange={(e) => setdevSummary(e.target.value)}
                value={devSummary}
                name="devSummary"
                type="text" />
          </label>
          <label>Tools: <input onChange={(e) => setdevTools(e.target.value)}
                value={devTools}
                name="devTools"
                type="text" />
          </label>
          <button type='submit'>submit</button>
      </form>
    </div>
    </div>
  )
}

export default PersonalInfo