import React, { useRef } from 'react';
import Button from './Button.component';

function ImperativeHandleTutorial() {

    const buttonRef = useRef(null);

    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', marginTop: '1%' }}>
        <button style={{ cursor: 'pointer', padding: '13px', borderRadius: 5 }} onClick={() => { buttonRef.current.alterToggle() }}>
            Button From Parent
        </button>
        <Button text='Click me' ref={buttonRef} />
    </div>);
}

export default ImperativeHandleTutorial;