import React from 'react';

import '../css/index.css';

// icon components
import { FaReact } from 'react-icons/fa';
import { IconContext } from "react-icons";


export default function Icons(props){



    return(
        props.iconId === 'react' ?

        <IconContext.Provider value={{ className: 'iconsTop' }}>
            <FaReact onClick={()=>{props.clickHandler('languageOptions')}} />
        </IconContext.Provider>

        :

        <div>nope</div>

    )
}