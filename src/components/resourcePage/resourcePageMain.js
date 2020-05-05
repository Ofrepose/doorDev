import React, { useState } from 'react';

import Header from "../header/headers";
import PopupBox from '../popUpBox';
import SideBar from '../sideBar/sideBar';
import ResourceMainSection from './resourceMainSection';

import '../css/index.css';

export default function ResourcePageMain(props){

    const [pageState,setPageState] = useState('initial');
    const [currentLanguage,setCurrentLanguage] = useState('react');

    const changePageState = (x) =>{
        setPageState(x);
    }

    const changeCurrentLanguage = (x) => {
        setCurrentLanguage(x);
    }

    return(
        pageState === 'initial' ?
        <div className="resourceBody">

            <Header state = {props.state}
                    title = "Developer {resources}"
                    changeState = {props.changeState}
                    iconId = {currentLanguage}
                    clickHandler = {changePageState}
            />

            <SideBar value1Title="Resources"
                    value1Content = {["MDNs","Libraries"]}
            />

            <ResourceMainSection />

        </div>

        :

        pageState === 'languageOptions' ?

            <div className="resourceBody">

                <Header state = {props.state}
                        title = "Developer {resources}"
                        changeState = {props.changeState}
                        iconId = {currentLanguage}
                        clickHandler = {changePageState}
                />

                <PopupBox />





            </div>

        :

            <div className="resourceBody">



            </div>


    );

}