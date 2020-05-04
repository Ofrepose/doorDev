import React from 'react';

import Header from "../header/headers";

import './resourcePage.css';

export default function ResourcePageMain(props){


    return(

        <div className="resourceBody">

            <Header state = {props.state} title = "Developer {resources}" changeState = {props.changeState}/>

        </div>

    );

}