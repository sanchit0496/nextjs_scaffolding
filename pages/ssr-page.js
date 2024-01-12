import React from 'react';

const SsrComponent = ({ data }) => {
    return (
        <div>
            <h1>Server-Side Rendered Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export async function getServerSideProps() {
    // Replace with your API endpoint
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default SsrComponent;
