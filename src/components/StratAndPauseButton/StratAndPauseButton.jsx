import React from 'react'
import { NavLink } from 'react-router-dom';
import "./StratAndPauseButton.css";


export default function StratAndPauseButton(props) {

    return (
        <div>
            <div className='btnContainer' >
                <NavLink to="/Heatup" className="testButton" onClick={() => {
                }} >{'START\nТЕSТ'}</NavLink>
            </div>
        </div>
    )
}
