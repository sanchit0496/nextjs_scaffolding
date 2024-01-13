// pages/404.js
import Link from 'next/link';
import React from 'react';

export default function Custom404() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <span>Home</span>
            </Link>
        </div>
    );
}
