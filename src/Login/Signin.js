import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin({ Login, error }) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


    return (
        <form onSubmit={submitHandler} className="form-outer">
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error1">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
                <h3>Are you new? <Link to="/form">Register here</Link></h3>
            </div>

        </form>
    )
}

export default Signin
