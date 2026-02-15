import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-violet-700 w-screen p-2.5 pl-5 pr-5 flex flex-wrap justify-around">
      <div className="w-1/2">logo</div>
      <ul className="w-1/2 flex flex-wrap justify-end gap-3.5">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">Services</a></li>
      </ul>
    </nav>
  )
}

export default Navbar