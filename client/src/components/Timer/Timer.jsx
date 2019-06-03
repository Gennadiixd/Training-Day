import React, { useState, useEffect } from 'react'
import "./Timer.css";

import PauseResumeButton from './PauseResumeButton';

export default function Timer(props) {
    const [progressState, setProgressState] = useState(100)
    const [pauseTimer, setPauseTimer] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            updateProgress(1)
        }, props.duration)
        if (progressState <= 0) {
            clearTimeout(timer)
            props.setTimerFinish(true);            
        } else if (pauseTimer) {
            clearTimeout(timer)     
        }
    });

    useEffect(() => {        
        setProgressState(100)
    },[props])

    function updateProgress(value) {        
        setProgressState(progressState - value)
    }

    return (
        <>
            <div className='timerContainer'>
                <div id="progressbar">
                    <div style={{ width: progressState + '%' }}></div>
                </div>
            </div>
            <PauseResumeButton setPauseTimer={setPauseTimer}/>
        </>
    )
}
