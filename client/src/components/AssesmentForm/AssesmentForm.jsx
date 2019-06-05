import React, { useRef, useState } from 'react'

export default function AssesmentForm(props) {

    let inputRef = useRef();

    const submitButton = () => {
        props.setFromForm(inputRef.current.value);
        inputRef.current.value = ''
    };

    return (
        <div className="App">
            <p>Выполняйте упражнение до отказа, запишите ваш результат в форму и нажмите "Submit"</p>

            <div>
                <input ref={inputRef} type="text" />
                <button type="button" onClick={() => {
                    submitButton();
                    props.setNext(true);
                }}>
                    Submit
          </button>
            </div>
        </div>
    );
}
