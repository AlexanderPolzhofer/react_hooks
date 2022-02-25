import React, { useRef, useState } from 'react';

function RefTutorial() {

    const [textInput, setTextInput] = useState('Alex');

    const inputRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        inputRef.current.focus();
        setTextInput(inputRef.current.value);
    }

    return (<div>
        <u><h1>useRef</h1></u>
        <h3>{textInput}</h3>
        <form>
            <input type='text' placeholder='Ex...' ref={inputRef} />
            <button onClick={handleClick}>Change Name</button>
        </form>
    </div>);
}

export default RefTutorial;