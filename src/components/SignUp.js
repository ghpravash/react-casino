import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUp.css'

function SignUp() {

    const history = useHistory();

    return (
        <div className="signup">
            <div className="signup__image">
                <div className = "la"> 
                    <div className="signup__text">
                        <span>$4,500,850 jackpot</span>
                        <h1>Join TexasPoker Today <br />
                            <span>To win Jackpot</span>
                        </h1>
                        <p>Anonymous gambling expereince. The easiet way to bet with Bitcoin start betting in 5 minutes</p>
                    </div>
                    
                    <div className="bu">
                    <Button onClick={() => history.push('/form')} variant='outlined'> Sign up for free <img className="bu__img" src="http://betboss777.com/images/icons/chevron.png" /> </Button>  </div> 
                </div>
            </div>
        </div>
    )
}

export default SignUp
