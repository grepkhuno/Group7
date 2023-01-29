import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";



const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", {
        Fname,
        Lname,
        Email,
        password,
        confirmpassword
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
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="/" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-register" data-mdb-toggle="pill" href="/register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>
          <div>
          <form onSubmit={handleSubmit} className="tab-pane">
            <div>
            <h1>Create an Account</h1>
            </div>
            <div className="form-label">
              <label>First Name: 
              <input className="form-control"
                onChange={(e) => setFname(e.target.value)}
                value={Fname}
                name="Fname"
                type="text"
              />
              </label>
              {errors.Fname ? <p className="validations alert" style={{color: 'red'}}>{errors.Fname.message}</p> : null}
            </div>

            <div className="form-label">
              <label>Last Name: 
              <input className="form-control" 
                onChange={(e) => setLname(e.target.value)}
                value={Lname}
                name="Lname"
                type="text"
              />
              </label>
              {errors.Lname ? <p className="validations" style={{color: 'red'}}>{errors.Lname.message}</p> : null}
            </div>

            <div className="form-label">
              <label>Email: 
              <input className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                name="email"
                type="text"
              />
              </label>
              {errors.Email ? <p className="validations" style={{color: 'red'}}>{errors.Email.message}</p> : null}
            </div>

            <div className="form-label">
              <label>Password: 
              <input className="form-control"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                name="password"
                type="text"
              />
              </label>
              {errors.password ? <p className="validations" style={{color: 'red'}}>{errors.password.message}</p> : null}
            </div>

            <div className="form-label">
              <label>Confirm Password: 
              <input className="form-control"
                onChange={(e) => setconfirmpassword(e.target.value)}
                value={confirmpassword}
                name="confirmpassword"
                type="text"
              />
              </label>
              {errors.confirmpassword ? <p className="validations" style={{color: 'red'}}>{errors.confirmpassword.message}</p> : null}
            </div>
            <button type="submit"className="mt-3">Register</button>
          </form>

          </div>
        </div>

  );
};

export default RegisterForm;