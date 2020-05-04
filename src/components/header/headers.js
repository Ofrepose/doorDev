import React from 'react';
import './header.css';


export default function Header(props){
    return (
        props.state === 'initial' ?

            <header>

                <div className='siteNameDiv'>

                    <div className = "siteName">door<span className="siteNameBlack">Devs</span></div>

                </div>

            </header>

        :

            <header className="gunMetalgrayBG">

                <div className='siteNameDiv gunMetalgrayBG'>

                    <div className = "siteName leftAligned">door<span className="siteNameBlack">Devs</span></div>

                    <div className="navLinksDiv gunMetalgrayBG">

                        <div className="navLink" onClick={()=>{props.changeState('initial')}}>{props.title}</div>

                    </div>

                </div>

            </header>

    )
}