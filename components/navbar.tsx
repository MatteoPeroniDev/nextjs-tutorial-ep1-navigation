import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='text-white bg-black py-4'>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar