import React, { useState } from 'react';

function Button({ ...props }) {
    const { text } = props;

    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', margin: '1% auto' }}>
            <button style={{ borderRadius: 5, padding: '2vh 2vw', margin: '2% auto', cursor: 'pointer' }}
                onClick={handleClick}>
                {text}
            </button>
            <span>{toggle && 'Toggle'}</span>
        </div>
    )
}

export default Button;