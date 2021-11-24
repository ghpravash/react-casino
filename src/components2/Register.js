import React, { useEffect, useState } from 'react';
import Validation from "./Validation";
import "./Register.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register( {submitForm} ) {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        pass: "",
    });

    const [errors, setErrors] =useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);


    return (
        <>
        <Navbar />
        <div className="register__container">
            <div className="register">
                <div  className="register__title">
                    <h2>Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name<sup>*</sup></label>
                        <input className="input" type="text" name="fullname" value={values.fullname} 
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email<sup>*</sup></label>
                        
                        <input className="input" type="text" name="email" value={values.email}
                        onChange={handleChange}
                         />
                         {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password<sup>*</sup></label>
                        <input className="input" type="password" name="password" value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="confirm__password">
                        <label className="label">Confirm Password<sup>*</sup></label>
                        <input className="input" type="password" name="pass" value={values.pass}
                            onChange={handleChange}
                        />
                        {errors.pass && <p className="error">{errors.pass}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Register</button>
                    </div>
                </form>
            </div>

        </div>
        <Footer />
        </>
    )
}

export default Register
