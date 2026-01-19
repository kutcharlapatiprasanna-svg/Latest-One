

import React from 'react';
import "./Industry.css"
import homePage from "../../assets/home.png"
import longTerm from "../../assets/long_term.png"
import retail from "../../assets/Retail.jpg"
import goenment from "../../assets/Government.jpg"

const Industry = () => {
    return (
        <div>
            <h1>Industry-Specific Solutions</h1>
            <div className='images-four'>
                <div className='card'>
                    <img src={homePage} alt="Homecare Providers" />

                </div>
                <div>

                    <div className='card'>
                        <img src={longTerm} alt="Long Term Care" />

                    </div>



                </div>
                <div className='card-two'>
                    <div className=''>
                        <img className='retail' src={retail} alt='h' />
                    </div>

                    <div>
                        {/* <img className='government' src={goenment} alt='ims' /> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Industry;

