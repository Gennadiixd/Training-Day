import React, { useState, useEffect } from 'react'
import "./Timer.css";

export default function Timer(props) {
    const [progressState, setprogressState] = useState(100)
    const [timerState, settimerState] = useState('active')

    useEffect(() => {        
        let timer = setTimeout(() => {
            updateProgress(props.time)
            settimerState('active')
        }, 100)
        if (progressState < 0) {
            clearTimeout(timer)
            settimerState('finished')
        } else if (props.time === 'pauseTimer') {
            clearTimeout(timer)            
            settimerState('paused')
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
            {progressState < 0 && <div>{timerState}</div>}
        </div>

    )
}
