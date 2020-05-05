import React from 'react';
import '../css/index.css';

import NavLink from './navLinks';
import Icons from '../icons/icons';



export default function Header(props){
    return (
        props.state === 'initial' ?

            <header>

                <div className='siteNameDiv'>

                    <div className = "siteName">door<span className="siteNameBlack">Devs</span></div>

                </div>

            </header>

        :
            props.state ==='resourcePage' ?

            <header className="gunMetalgrayBG">

                <div className='siteNameDiv gunMetalgrayBG'>

                    <div className = "siteName leftAligned">door<span className="siteNameBlack">Devs</span></div>

                    <div className="navLinksDiv gunMetalgrayBG">

                           <NavLink changeState = {props.changeState}
                                    title = {props.title}
                           />

                           <Icons iconId = {props.iconId}

                                  clickHandler = {props.clickHandler}
                           />



                    </div>

                </div>

            </header>

        :

        <Header></Header>


    )
}