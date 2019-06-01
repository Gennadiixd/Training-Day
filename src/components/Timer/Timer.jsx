import React, { useState, useEffect } from 'react'
import "./Timer.css";

export default function Timer(props) {
    const [progressState, setprogressState] = useState(100)
    
    useEffect(() => {      
        let timer = setTimeout(() => {
            updateProgress(props.time)
        }, 100)
        if (progressState <= 0) {
            clearTimeout(timer)
            props.setTimerStatus('exerciseDone');
            setprogressState(100)
        } else if (props.time.status === 'pauseTimer') {
            clearTimeout(timer)     
        }
    });

    function updateProgress(value) {
        setprogressState(progressState - value)
    }

    return (
        <div>
            <div id="progressbar">
                <div style={{ width: progressState + '%' }}></div>
            </div>            
        </div>

    )
}
