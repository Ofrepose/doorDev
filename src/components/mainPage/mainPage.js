import React, { useState,useEffect } from 'react';
import '../css/index.css';
import TextField from '../forms/textField';
import PasswordField from '../forms/passwordField';
import Route from 'react-router-dom';

import { connect } from 'react-redux';
import {loginDeveloper} from '../../utils/actions/actionsIndex';
import BusinessSignUpForm from "../forms/businessSignUpForm";
import BusinessSignInForm from "../forms/businessSignInForm";
import DeveloperSignInForm from "../forms/developerSignInForm";
import DeveloperSignUpForm from "../forms/developerSignUpForm";




function MainPage(props){
    useEffect(()=>{

    })
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

                            <BusinessSignUpForm stateChanger={stateChanger} />

                        <div className="underFormText absolutePositionBottom">Developer?

                            <span className="blueTextDefault" onClick={()=>{stateChanger('dev')}}> Login here</span>

                        </div>

                    </div>

                </div>

                :

                introState === "busSignIn" ?

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

                                <BusinessSignInForm stateChanger={stateChanger} />

                            <div className="underFormText absolutePositionBottom">Developer?

                                <span className="blueTextDefault" onClick={()=>{stateChanger('dev')}}> Login here</span>

                            </div>

                        </div>

                    </div>


                    :

                    introState === "devSignUp" ?


                        <div className="loginSignup">

                            <div className="halfPageNoPhotoFlex">

                                <div className="pageTitleCenter blueTextDefault">Developer Sign-in</div>

                                    <DeveloperSignUpForm stateChanger={stateChanger} />

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


                    :

                <div className="loginSignup">

                    <div className="halfPageNoPhotoFlex">

                        <div className="pageTitleCenter blueTextDefault">Developer Sign-in</div>

                            <DeveloperSignInForm stateChanger={stateChanger} />

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
export const mapStateToProps2 = state =>{
    return{
        isLoading: state.isLoading,
        user: state.user,
        projects: state.projects,
        businesses: state.businesses,
    }
}

export default connect(mapStateToProps2, {loginDeveloper})(MainPage)
