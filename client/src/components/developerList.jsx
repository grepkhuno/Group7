import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const DeveloperList = () => {
  const navigate = useNavigate()
  const [allusers, setAllUsers] = useState([]);
  const [userkey, setuserkey] = useState([])

  
  
  // const submithandler = (e) => {
  //   e.preventDefault()
  //   axios.post("http://localhost:8000/api/getAllDevelopersList",{
  //   },{withCredentials:true})
  //   .then((res)=>{
  //     console.log(res);
  //     navigate('/meals')
  //   }).catch((err)=>{
  //     console.log(err.response)
  //   });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allusers")
      .then((response) => {
        console.log(response.data);
        setAllUsers(response.data);
        setuserkey(response.data)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    
    <div>
      <form onSubmit={submithandler} className="">
        <div className='.flex-lg-row p-1 d-flex justify-content-around align-items-center bg-warning'>
      <h3 className='bg-primary p-3'>developerList</h3>
      <h3>Login</h3>
      </div>
      <div className='d-flex justify-content-between mb-2  text-white'>
      <div className=' d-inline-flex flex-column bg-primary mt-3'>
        <div className='text-dark'>
        <h2>staffing company name</h2>
        </div>
        <div className='mt-5 '>
          {/* <h3><Link to="" className='text-white'> Summary </Link></h3>
          <h3><Link to="" className='text-white'>Tools</Link></h3>
          <h3><Link to="" className='text-white'>Contact</Link></h3> */}
        </div>

      </div>
      <div className=''>
        {allusers.map((user, index) =>{
          return(
          <div className='d-sm-flex align-items-center p-5'>
            <div>
              <p className='text-dark nav border border-dark p-4 bg-primary'>Picture of developer</p>
            </div>
            <div className='p-3 mb-2'>
        <ul>
          <li key={user._id} className='nav border  text-dark border-dark col-6'>
            {user.Fname} {user.Lname}
          </li>
            <textarea name="" id="" rows="4" placeholder='summary'></textarea>
        </ul>
        </div>
        </div>
          )
      })}
      </div>
      <div>
        <p className='text-dark'>Filter by: Language a-z</p>
      </div>
      </div>
      </form>

    </div>
  )
}

export default DeveloperList