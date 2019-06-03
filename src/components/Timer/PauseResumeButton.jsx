import React, { useState } from 'react'

export default function PauseResumeButton(props) {
    const [buttonState, setButtonState] = useState('Pause')

    return (
        <div>
            <div className='btnContainer' >
                <div to="/Heatup" className="testButton" onClick={buttonState === 'Pause' ?
                    () => {
                        props.setPauseTimer(true)
                        setButtonState('Resume')
                    }
                    :
                    () => {
                        props.setPauseTimer(false)
                        setButtonState('Pause')
                    }
                } >{buttonState}</div>
            </div>
        </div>
    )
}
