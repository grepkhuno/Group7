import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../register.css";

const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/register",
        {
          Fname,
          Lname,
          Email,
          password,
          confirmpassword,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate(`/user/${res.data.user._id}`);
      })
      .catch((err) => {
        console.log(err.response.data.err);
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <div>
    <div className="d-flex justify-content-evenly top-nav">
                <div className="mt-3">
                    <a href="/jobavailable" className="h-anch">
                        <h2>Job Search</h2>
                    </a>
                </div>
                <div className="mt-3">
                    <a href="/devlist" className="h-anch">
                        <h2 className="dev-list rounded pt-2 pb-2 ps-2 pe-2">
                            Developers List
                        </h2>
                    </a>
                </div>
                <div>
                    <a href="/" className="h-anch">
                        <h2 className="mt-3">Login</h2>
                    </a>
                </div>
            </div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="tab-pane">
          <div>
            <h1>Create an Account</h1>
          </div>
          <div className="form-label">
            <label>
              First Name:
              <input
                className="form-control"
                onChange={(e) => setFname(e.target.value)}
                value={Fname}
                name="Fname"
                type="text"
              />
            </label>
            {errors.Fname ? (
              <p className="validations alert" style={{ color: "red" }}>
                {errors.Fname.message}
              </p>
            ) : null}
          </div>

          <div className="form-label">
            <label>
              Last Name:
              <input
                className="form-control"
                onChange={(e) => setLname(e.target.value)}
                value={Lname}
                name="Lname"
                type="text"
              />
            </label>
            {errors.Lname ? (
              <p className="validations" style={{ color: "red" }}>
                {errors.Lname.message}
              </p>
            ) : null}
          </div>

          <div className="form-label">
            <label>
              Email:
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                name="email"
                type="text"
              />
            </label>
            {errors.Email ? (
              <p className="validations" style={{ color: "red" }}>
                {errors.Email.message}
              </p>
            ) : null}
          </div>

          <div className="form-label">
            <label>
              Password:
              <input
                className="form-control"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                name="password"
                type="text"
              />
            </label>
            {errors.password ? (
              <p className="validations" style={{ color: "red" }}>
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <div className="form-label">
            <label>
              Confirm Password:
              <input
                className="form-control"
                onChange={(e) => setconfirmpassword(e.target.value)}
                value={confirmpassword}
                name="confirmpassword"
                type="text"
              />
            </label>
            {errors.confirmpassword ? (
              <p className="validations" style={{ color: "red" }}>
                {errors.confirmpassword.message}
              </p>
            ) : null}
          </div>
          <button type="submit" className="mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
