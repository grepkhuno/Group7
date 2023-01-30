import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const DeveloperList = () => {
  const navigate = useNavigate()
  const [devID, setDevID] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [, setuserkey] = useState([])
  const { id } = useParams()

  
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allusers")
      .then((response) => {
        console.log("%%%%%%%%%%%%%%%%%"+response.data);
        setDevID(response.data._id)
        setAllUsers(response.data);
        // setuserkey(response.data)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const contactDeveloperByID = (e) => {
    e.preventDefault()

            navigate(`/contact/${id}`)


}

  return (
    
    <div>
      <form className="">
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
        {allusers.map((usersList) =>{
          return(
          <div className='d-sm-flex align-items-center p-5'>
            <div>
              <button type='submit' className='btn btn-info m-2 ' onClick={contactDeveloperByID} > Contact Developer </button>
              <p className='text-dark nav border border-dark p-4 bg-primary'>Picture of developer</p>
            </div>
            <div className='p-3 mb-2'>
        <ul>
          <li  className='nav border  text-dark border-dark col-6'>
            {usersList.Fname} {usersList.Lname}
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