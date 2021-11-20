import React from 'react'
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <ul className="flex flex-row">
            <li><Link to="/about" href="/about" className="p-4 hover:text-gray-500 font-bold" >About</Link></li>
            <li><a href="src/Resources/Resume.pdf" className="p-4 hover:text-gray-500 font-bold" download="Cameron Way's Resume">Resume</a></li>
            <li><a href="https://github.com/cway14" className="p-4 hover:text-gray-500 font-bold">Github</a></li>
            <li><a href="https://www.linkedin.com/in/camway/" className="p-4 hover:text-gray-500 font-bold" >Linkedin</a></li>
            <li><Link to="/about" className="bg-black text-white px-4 hover:text-gray-300 font-bold py-3 rounded-lg items-center ml-4 mr-2"> View Work</Link></li>
        </ul>
    )
}

export default Nav