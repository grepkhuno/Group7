import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function PersonalInfo() {

  const {id} = useParams()
  const [user, setuser] = useState({})
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [devPicture, setdevPicture] = useState("");
  const [devSummary, setdevSummary] = useState("");
  const [devTools, setdevTools] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/oneuser/${id}`)
    .then((res)=>{
      setuser(res.data)
      setFname(res.data.Fname)
      setLname(res.data.Lname)
      setdevPicture(res.data.devPicture)
      setdevSummary(res.data.devSummary)
      setdevTools(res.data.devTools)
      console.log(res);
    }).catch((err)=>{
      console.log(err)

    });
  },[]);



  const submitLname = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/updateuser/${id}`, {
        Fname,
        Lname,
        devPicture,
        devSummary,
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

  const homebtn = () => {
    navigate('/')
  }

  

  return (
    <div>
    <h1>personalInfo</h1>
    <button onClick={homebtn}>Home</button>
    <div>
    <div>Welcome, {user.Fname}</div>
    <form onSubmit={submitLname}>
    <div>
      First Name: <input onChange={(e) => setFname(e.target.value)}
                value={Fname}
                name="Fname"
                type="text" 
                placeholder={user.Fname}/>
                {errors.Fname ? <p className="validations alert" style={{color: 'red'}}>{errors.Fname.message}</p> : null}
                <button onClick={submitLname}> Update</button>
      </div>
      <div>
      Last Name: <input onChange={(e) => setLname(e.target.value)}
                value={Lname}
                name="Lname"
                type="text" 
                placeholder={user.Lname}/>
                {errors.Lname ? <p className="validations alert" style={{color: 'red'}}>{errors.Lname.message}</p> : null}
      </div>
      <div>
      Picture: <input onChange={(e) => setdevPicture(e.target.value)}
                value={devPicture}
                name="devPicture"
                type="text"
                accept='image/'/>
                {errors.devPicture ? <p className="validations alert" style={{color: 'red'}}>{errors.devPicture.message}</p> : null}
      </div>
      <div>
      Summary: <textarea onChange={(e) => setdevSummary(e.target.value)}
                value={devSummary}
                name="Lname"
                type="text" 
                rows={4}
                placeholder={user.devSummary}/>
                {errors.Lname ? <p className="validations alert" style={{color: 'red'}}>{errors.Lname.message}</p> : null}
      </div>
      <div>
      Tools: <input onChange={(e) => setdevTools(e.target.value)}
                value={devTools}
                name="devTools"
                type="text"/>
                {errors.devTools ? <p className="validations alert" style={{color: 'red'}}>{errors.devTools.message}</p> : null}
      </div>
      </form>

          
    </div>
    </div>
  )
}

export default PersonalInfo