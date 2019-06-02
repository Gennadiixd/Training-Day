import React, { useState, useEffect } from 'react'
import "./Timer.css";

export default function Timer(props) {
    
    
    useEffect(() => {      
        let timer = setTimeout(() => {
            updateProgress(5)
        }, 100)

        if (props.progressState <= 0) {
            clearTimeout(timer)
            props.setNeedChange(true); 
        } 
        // else if (props.time.status === 'pauseTimer') {
        //     clearTimeout(timer)     
        // }
    });

    function updateProgress(value) {
        props.setprogressState(props.progressState - value)
    }

    return (
        <div className='timerContainer'>
            <div id="progressbar">        
                <div style={{ width: props.progressState + '%' }}></div>
            </div>            
        </div>
    )
}
