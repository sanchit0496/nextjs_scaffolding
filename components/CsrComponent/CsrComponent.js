import React, { useState, useEffect } from 'react';

const CsrComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/5')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Client-Side Rendered Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default CsrComponent;
