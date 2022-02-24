import React, { useEffect, useLayoutEffect, useRef } from 'react';

function LayoutEffectTutorial() {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = 'HELLO';
    }, []);

    return (<div>
        <form>
            <input ref={inputRef} defaultValue='Alex' style={{ width: '40vw', height: '20vh', textAlign: 'center', margin: '5% auto' }} />
        </form>
    </div>);
}

export default LayoutEffectTutorial;