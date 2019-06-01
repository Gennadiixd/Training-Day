import React from 'react'
import {NavLink} from 'react-router-dom';
import "./StratTestButton.css";

export default function StratTestButton(props) {
    return (
        <div className = 'btnContainer' onClick = {() => props.setstate("Heating Up")}>
            <NavLink to="/Assesment" className="testButton">{'START\nТЕSТ'}</NavLink>
        </div>
    )
}
