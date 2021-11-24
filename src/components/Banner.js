import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './Banner.css';
import StackReel from './StackReel';


function Banner() {

    const history = useHistory();

    return (
 <>
        <div className="casi">
            <div className="banner">
                <div className="banner__text">
                    <h2>Live Casino</h2>
                    <h1>Roulette</h1>
                </div>
                <div className="banner__button">
                        <Button onClick={() => history.push('/form')} variant='outlined'>SIGN UP FOR FREE</Button>
                </div>
                <StackReel />
            </div>
            
        </div>

        

        </>
    )
}

export default Banner
