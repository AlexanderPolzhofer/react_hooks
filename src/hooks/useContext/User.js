import React, { useContext } from 'react';

import { AppContext } from './Context_useContext';

function User() {

    const { username } = useContext(AppContext);

    return (<div>
        <h2>User: {username}</h2>
    </div>)
}

export default User;