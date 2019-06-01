import React, { useState, useEffect } from 'react';
import Neck from './neck.jpg';
import Hands from './hands.jpg';
import './Heatup.css'

export default function Heatup(props) {
    let heatupArray = [{name : 'Neck', img : Neck}, {name : 'Hands', img : Hands}]

    useEffect(() => {
        props.setHeatup(heatupArray[props.next].name)
    }, [props.next]);
    
    return (
        <>  
            <div className="imgContainer">
                <img src={heatupArray[props.next].img} alt='neck'></img>
            </div>
        </>
    )
}
