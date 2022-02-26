import React, { useState, useEffect, useMemo } from 'react';

function MemoTutorial() {

    //useMemo hook stores a value - useCallback is similar to the useMemo hook but it can store a function instead

    //if we need to access a value we will choose the useMemo hook, if we need to access a function we will use the useCallback hook

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false)
            })
    }, [])

    const findLongestName = (users) => {
        if (!users) {
            return null;
        } else {
            let longestName = '';

            for (let i = 0; i < users.length; i++) {
                let currentName = users[i].name;
                if (currentName.length > longestName.length) {
                    longestName = currentName;
                }
            }
            console.log('THIS WAS COMPUTED');

            return longestName;
        }
    };

    const getLongestName = useMemo(() => { findLongestName(data) }, [data])

    return (<div>
        <u><h2>useMemo</h2></u>
        <section>
            <u><span>list of names:</span></u>
            {!isLoading && <ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>}
        </section>
        <section>
            <u><span>longest name:</span></u>
            {getLongestName}
        </section>
    </div>);

}

export default MemoTutorial;