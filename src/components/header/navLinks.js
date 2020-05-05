import React from 'react';

import '../css/index.css';

export default function NavLinks(props){

    return (

        <div className="navLink"
             onClick={()=>{props.changeState('initial')}}>

            {props.title}

        </div>

    )

}