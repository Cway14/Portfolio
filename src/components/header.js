import React from 'react'
import Nav from './nav'
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className='top-0 left-0 right-0 sticky w-full flex justify-between p-6 items-center rounded-xl bg-white opacity-95'>
            <Link to='/' className="items-center text-2xl">Cameron Way</Link>
            <Nav />
        </div>
    )
}

export default Header
