import Link from 'next/link'

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
            <span className="hover:bg-blue-700 p-2 rounded">First Post</span>
          </Link>
        </li>
        <li>
          <Link href="/second-post">
            <span className="hover:bg-blue-700 p-2 rounded">Second Post</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
