import React, { useState } from 'react'

export default function Exercise(props) { 
    return (
        <div>
            <img src={props.exercise.img} alt={props.exercise.name}></img>            
        </div>
    )
}
