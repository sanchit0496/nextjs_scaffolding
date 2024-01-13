// pages/_error.js
import Link from 'next/link';
import React from 'react';

function Error({ statusCode }) {
    return (
        <div>
            <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
            <Link href="/">
                <a>Go back home</a>
            </Link>
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
