import React from 'react'
import "./Header.css";

export default function Header(props) {
    
    return (
        <header>
            <div className="container h-flex">
                <h2>{props.state}</h2>
            </div>
        </header>
    )
}
