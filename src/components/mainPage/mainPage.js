import React from 'react';
import './mainPage.css';
import TextField from '../forms/textField';

export default function MainPage(){
    return (
        <div className="mainPage">

            <div className="loginSignup">

                <div className="leftPage">

                    <div className="leftPageTitle">Small Business &#8594; Meet Your Developers</div>

                    <div className="leftPageUnder">

                        Connecting today's small businesses with new developers
                        <br />to bring their web presence into the modern age

                    </div>

                </div>

                <div className="rightPage">

                    <div className="rightPageTitle">Business Application</div>

                    <form className="businessSignUp">
                        <TextField label = 'Contact Name'/><br />
                        <TextField  label = 'Business Name'/><br />
                        <TextField label = 'Current Website'/> <br />
                        <TextField label = 'Email Address'/><br />


                        <div className="f_dataS">Submit</div>

                    </form>
                </div>

            </div>






        </div>
    );
}