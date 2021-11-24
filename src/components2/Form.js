import React, { useState } from 'react'
import FormSuccess from './FormSuccess';
import Register from './Register'

function Form() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div>
            { !formIsSubmitted ? <Register submitForm={submitForm} /> : <FormSuccess /> }
            
        </div>
    )
}

export default Form
