import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const ContactInfo = (props) => {
  const [devID, setDevID] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [error, setErrors] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/getDeveloperByID/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setDevID(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/addContact', {
        name,
        email,
        comment
    }).then((res) => {
        console.log(res)
        console.log("passed info to DB");
        // navigate('/ItemsList')

    }).catch((err) => {
        console.log("catch from front-end")
        console.log(err)
        setErrors(err.response.data.errors)
    })
}


  return (
    <div>
        <h1></h1>
        <h4>If you want to connect to DEVELOPER please add you contact information.</h4>

        <form onSubmit={submitHandler} >
            <div className="row border boder-warning col-10 mx-auto">
                <div className="d-flex flex-column align-items-start col-8 border boder-warning p-2">
                    <label className='form-label'>Name:</label>
                    <input value={name} id='name' type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
                    {error.name && <span className='text-danger'>{error.name.message} </span>}
                    <label className='form-label'>Email:</label>
                    <input value={email} id='name' type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <span className='text-danger'>{error.email.message} </span>}
                    <label className='form-label'>Comment: </label>
                    <textarea value={comment} id='commentv' type="text" className='form-control' onChange={(e) => setComment(e.target.value)} />
                    {error.comment ? <span className='text-danger'>{error.comment.message} </span> : null}

                </div>
                <div className="d-flex flex-column justify-content-center col-4 border boder-warning align-items-center  ">
                    <button type='submit' className='btn btn-info m-2 '>Add Pet</button>

                </div>
            </div>
        </form>
        {/* <button className='btn btn-warning m-2' onClick={cancelHandler} >Cancel</button> */}

    </div>
)
 
};
export default ContactInfo;
