import React, { useEffect, useState } from 'react';

function EffectTutorial() {

    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/comments';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (<div>
        <u><h1>useEffect</h1></u>
        <ul>{data.map(element => <li key={element.id}>{element.email}</li>)}</ul>
    </div>);
}

export default EffectTutorial;