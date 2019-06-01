import React from 'react'
import "./Header.css";

export default function Header(props) {
    debugger
    return (
        <header>
            <div className="container h-flex">
                <h2>{props.state}</h2>
            </div>
        </header>
    )
}
