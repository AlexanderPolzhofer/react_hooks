import React, { useContext } from 'react';

import { AppContext } from './Context_useContext';

function Login() {

    const { setUsername } = useContext(AppContext);

    return (<div>
        <form>
            <input type='text' placeholder='type in your username ...' onChange={(event) => setUsername(event.target.value)} />
        </form>
    </div>);
}

export default Login;