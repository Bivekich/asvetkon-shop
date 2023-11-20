import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">АСВЕТКОН</Link>
      </p>
    </div>
  )
}

export default Navbar