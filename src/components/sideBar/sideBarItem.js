import React, {useState} from 'react';

import '../css/index.css';

export default function SideBarItem(props){

    const [plusState, setPlusState] = useState('+')

    const changePlusState = () => {

        plusState === '+' ? setPlusState('-') : setPlusState('+');

    }

    return(



        <div className="itemTitle">{props.value1Content} {plusState}</div>





    )

}