import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref) => {
    const { text } = props;

    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', margin: '1% auto' }}>
            <button style={{ borderRadius: 5, padding: '2vh 2vw', margin: '2% auto', cursor: 'pointer' }}>
                {text}
            </button>
            <span>{toggle && 'Toggle'}</span>
        </div>
    );
})

export default Button;