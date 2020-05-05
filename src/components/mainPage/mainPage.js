import React, { useState } from 'react';
import '../css/index.css';
import TextField from '../forms/textField';
import PasswordField from '../forms/passwordField';



export default function MainPage(){

    const [introState,changeIntroState] = useState('intro');

    const stateChanger = (x) =>{
        changeIntroState(x);
    }

    return (


        <div className="mainPage">
            {introState === 'intro' ?
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


                            <div className="f_dataS" >Submit</div>

                        </form>

                        <div className="underFormText absolutePositionBottom">Developer?

                            <span className="blueTextDefault" onClick={()=>{stateChanger('dev')}}> Login here</span>

                        </div>

                    </div>

                </div>

                :

                <div className="loginSignup">

                    <div className="halfPageNoPhotoFlex">

                        <div className="pageTitleCenter blueTextDefault">Developer Sign-in</div>

                        <form className="businessSignUp">

                            <TextField label = 'Username'/><br />
                            <PasswordField  label = 'Password'/><br />
                            <div className="underFormText">New User? <span className="blueTextDefault">Create account</span></div>
                            <br />
                            <div className="f_dataS">Login</div>

                        </form>

                        <div className="underFormText absolutePositionBottom">Small Business?

                            <span className="blueTextDefault" onClick={()=>{stateChanger('intro')}}> Sign-up here</span>

                        </div>



                    </div>


                    <div className="halfPageWithImageFlex" id="devLoginImage">

                        <div className="leftPageTitle">New Developer &#8594; Meet Your first clients</div>

                        <div className="leftPageUnder">

                            Connecting new Developers with small businesses
                            <br />to garner new experience and portfolio ready projects

                        </div>

                    </div>

                </div>

            }
        </div>
    );
}