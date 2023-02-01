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
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const submitFname = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        Fname
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/user/${id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  const homebtn = () => {
    navigate('/')
  }

  const submitLname = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        Lname
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/user/${id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  const submitpicture = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        devPicture
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/user/${id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  const submitsummary = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        devSummary
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/user/${id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  const submittools = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {

        devTools  
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/user/${id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  

  return (
    <div>
    <h1>personalInfo</h1>
    <button onClick={homebtn}>Home</button>
    <div>
    <div>Welcome, {user.Fname}</div>
    <form onSubmit={submitFname}>
    <div>
      First Name: <input onChange={(e) => setFname(e.target.value)}
                value={Fname}
                name="Fname"
                type="text" 
                placeholder={user.Fname}/>
                {errors.Fname ? <p className="validations alert" style={{color: 'red'}}>{errors.Fname.message}</p> : null}
      <button type='submit'>Update</button>
      </div>
      </form>
      <form onSubmit={submitLname}>
      <div>
      Last Name: <input onChange={(e) => setLname(e.target.value)}
                value={Lname}
                name="Lname"
                type="text" 
                placeholder={user.Lname}/>
                {errors.Lname ? <p className="validations alert" style={{color: 'red'}}>{errors.Lname.message}</p> : null}
      <button type='submit'>Update</button>
      </div>
      </form>
      <form onSubmit={submitpicture}>
      <div>
      Picture: <input onChange={(e) => setdevPicture(e.target.value)}
                value={devPicture}
                name="devPicture"
                type="text"
                accept='image/'/>
                {errors.devPicture ? <p className="validations alert" style={{color: 'red'}}>{errors.devPicture.message}</p> : null}
                <button type='submit'>Update</button>
      </div>
      </form>
      <form onSubmit={submitsummary}>
      <div>
      Summary: <textarea onChange={(e) => setdevSummary(e.target.value)}
                value={devSummary}
                name="Lname"
                type="text" 
                rows={4}
                placeholder={user.devSummary}/>
                {errors.Lname ? <p className="validations alert" style={{color: 'red'}}>{errors.Lname.message}</p> : null}
                <button type='submit'>Update</button>
      </div>
      </form>
      <form onSubmit={submittools}>
      <div>
      Tools: <input onChange={(e) => setdevTools(e.target.value)}
                value={devTools}
                name="devTools"
                type="text"/>
                {errors.devTools ? <p className="validations alert" style={{color: 'red'}}>{errors.devTools.message}</p> : null}
                <button type='submit'>Update</button>
      </div>
      </form>

          
    </div>
    </div>
  )
}

export default PersonalInfo