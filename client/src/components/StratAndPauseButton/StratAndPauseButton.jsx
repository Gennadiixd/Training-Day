import React from 'react'
import { NavLink } from 'react-router-dom';
import "./StratAndPauseButton.css";


export default function StratAndPauseButton(props) {

    return (
        <div>
            <div className='btnContainer' >
                <NavLink to="/Heatup" className="testButton" onClick={() => {
                }} >{'HeatUp'}</NavLink>
            </div>
            <div className='btnContainer' >
                <NavLink to="/Training" className="testButton" onClick={() => {
                }} >{'Training'}</NavLink>
            </div>
        </div>
    )
}
