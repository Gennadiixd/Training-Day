import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import "./StratAndPauseButton.css";

export default function StratAndPauseButton(props) {
    const [state, setstate] = useState('START\nТЕSТ')

    return (
        <div>
            <div className='btnContainer' >
                <NavLink to="/Assesment" className="testButton" onClick={state === 'START\nТЕSТ' || state === 'Resume' ? () => {
                    props.setstate("Heating Up")
                    setstate('Pause')
                    props.settimerState(1)
                } : () => {
                    props.setstate("Paused")
                    setstate('Resume')
                    props.settimerState('pauseTimer')
                }}>{state}</NavLink>
            </div>

        </div>

    )
}
