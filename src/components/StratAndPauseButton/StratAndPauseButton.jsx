import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./StratAndPauseButton.css";

export default function StratAndPauseButton(props) {
    const [state, setstate] = useState('START\nТЕSТ')

    return (
        <div>
            <div className='btnContainer' >
                <NavLink to="/Assesment" className="testButton" onClick={() => {
                    props.setStartTimer(1)
                    props.setShow(1)
                    setstate('pause')
                }} >{state}</NavLink>
            </div>
        </div>
    )
}
