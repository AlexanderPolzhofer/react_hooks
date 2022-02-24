import React, { useState } from 'react';

function StateTutorial() {

    const [value, setValue] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleCount = () => {
        setValue(value + 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <u><h1>useState hook</h1></u>
            <p>{value}</p>
            <button onClick={handleCount}>COUNT</button>

            <form>
                <input type='text' onChange={(event) => handleChange(event)} label='input' />

                <button type='submit' onSubmit={handleSubmit}>Submit</button>
            </form>

            {inputValue}
        </div>
    );
}

export default StateTutorial;