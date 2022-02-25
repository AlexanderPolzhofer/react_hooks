import React from 'react';
import Button from './Button.component';

function ImperativeHandleTutorial() {
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', marginTop: '1%' }}>
        <button style={{ cursor: 'pointer', padding: '13px', borderRadius: 5 }}>Button From Parent</button>
        <Button text='Click me' />
    </div>);
}

export default ImperativeHandleTutorial;