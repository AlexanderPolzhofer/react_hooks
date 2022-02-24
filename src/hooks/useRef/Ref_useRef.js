import React, { useRef } from 'react';

function RefTutorial() {

    const inputRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        inputRef.current.focus();
    }

    return (<div>
        <u><h1>useRef</h1></u>
        <h3>Alex</h3>
        <form>
            <input type='text' placeholder='Ex...' ref={inputRef} />
            <button onClick={handleClick}>Change Name</button>
        </form>
    </div>);
}

export default RefTutorial;