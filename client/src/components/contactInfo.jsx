import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../contactinfo.css";

const ContactInfo = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [error, setErrors] = useState({});
    const [devID, setDevID] = useState("");
    const [devNname, setDevName] = useState("");
    const [devLastNname, setDevLastName] = useState("");
    const [devEmail, setDevEmail] = useState("");
    const [devPic, setDevPic] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneuser/${id}`)
            .then((res) => {
                setDevID(res.data._id)
                setDevName(res.data.Fname)
                setDevLastName(res.data.Lname)
                setDevEmail(res.data.Email)
                setDevPic(res.data.devPicture)
                console.log(res);
            }).catch((err) => {
                console.log(err)
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/addContact", {
                name,
                email,
                comment,
                devID,
                devEmail
            })
            .then((res) => {
                console.log(res);
                console.log("passed info to DB");
                navigate("/devlist");

            })
            .catch((err) => {
                console.log("catch from front-end");
                console.log(err);
                setErrors(err.response.data.errors);
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
            <div className="d-flex justify-content-between mb-2 text-white">
                <div className=" d-inline-flex flex-column sidenav mt-3 ">
                    <div className="d-flex picture mt-5 rounded-circle">
                        <img className="border border-dark m-2" src={devPic} />
                    </div>
                    <div className="text-dark">
                        <h2 className="navtitle">{devNname} {devLastNname} </h2>
                    </div>
                    <div className="sidenav-option">

                    </div>
                </div>

                <div className="d-flex  content mt-5">
                    <h4>
                        If you want to connect to {devNname} {devLastNname} please add you contact
                        information.
                    </h4>

                    <form onSubmit={submitHandler}>
                        <div className="d-flex row border boder-warning col-10 mx-auto">
                            <div className="d-flex flex-column align-items-start col-8 border boder-warning p-2">
                                <label className="form-label">Name:</label>
                                <input
                                    value={name}
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {error.name && (
                                    <span className="text-danger">{error.name.message} </span>
                                )}
                                <label className="form-label">Email:</label>
                                <input
                                    value={email}
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error.email && (
                                    <span className="text-danger">{error.email.message} </span>
                                )}
                                <label className="form-label">Comment: </label>
                                <textarea
                                    value={comment}
                                    id="commentv"
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                {error.comment ? (
                                    <span className="text-danger">{error.comment.message} </span>
                                ) : null}
                            </div>
                            <div className="d-flex flex-column justify-content-center col-4 border boder-warning align-items-center  ">
                                <button type="submit" className="btn btn-info m-2 ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <button className='btn btn-warning m-2' onClick={cancelHandler} >Cancel</button> */}
                </div>
            </div>
        </div>
    );
};
export default ContactInfo;
