import Link from 'next/link'
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex row">
        <li>
          <Link href="/">
            <span className="hover:bg-blue-700 p-2 rounded">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/ssr-page">
            <span className="hover:bg-blue-700 p-2 rounded">SSR Page</span>
          </Link>
        </li>
        <li>
          <Link href="/csr-page">
            <span className="hover:bg-blue-700 p-2 rounded">CSR Page</span>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <span className="hover:bg-blue-700 p-2 rounded">Gallery</span>
          </Link>
        </li>
        <li>
          <Link href="/first-post">
            <span className="hover:bg-blue-700 p-2 rounded">Slug Page 01</span>
          </Link>
        </li>
        <li>
          <Link href="/second-post">
            <span className="hover:bg-blue-700 p-2 rounded">Slug Page 02</span>
          </Link>
        </li>
        <li>
          <Link href="/posts/technology/2">
            <span className="hover:bg-blue-700 p-2 rounded">Dynamic Routing 01</span>
          </Link>
        </li>
        <li>
          <Link href="/posts/science/4">
            <span className="hover:bg-blue-700 p-2 rounded">Dynamic Routing 02</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
