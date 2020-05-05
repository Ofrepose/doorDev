import React, { useState } from 'react';

import '../css/index.css';
import SideBarItem from './sideBarItem';

export default function SideBar(props){

    return(

        <section className="sideBarSection">


            <div className="barDiv">

                <div className="title">{props.value1Title}</div>

                {props.value1Content.map(item=>{
                    return <SideBarItem value1Content = {item} />
                })}



            </div>


        </section>
    )
}