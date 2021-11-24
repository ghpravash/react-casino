import React, { useState } from 'react'
import Signin from './Signin';
import './Signin.css';
import Navbar from '../components/Navbar';

function Loginform() {
    const adminUser = {
        email:"admin@admin.com",
        password:"admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
        console.log("Logged in"); 
            setUser({
                name: details.name,
                email: details.email
            })
            }
        else {
            console.log("details does not match");
            setError("Details do not match")

        }
    }

    const Logout = () => {
        setUser({name: "", email: ""});
    }

    return (
        <>
        <Navbar />
        <div className="loginform">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span> </h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <Signin Login={Login} error={error}/>
            )}
            
        </div>
        </>
    )
}

export default Loginform
