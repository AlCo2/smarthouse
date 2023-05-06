import React from 'react'
import Link from 'next/link';
const NavBar = () => {
  return (
    <div>
        <nav>
            <div className="navBrand">
                <h1>Smart</h1>
                <h1 className="brand">Ho</h1>
            </div>
            <div>
                <ul id="navbar" className="navList">
                    <div>
                        <i id="closeNav" className="fa-solid fa-xmark closeNav"></i>
                    </div>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="Dashboard">Dashboard</Link></li>
                    <li><Link href="addDevices">Add a device</Link></li>
                    <li><Link href="settings">Settings</Link></li>
                    <li><Link href="">Bessie Cooper</Link></li>
                </ul>
            </div>
            <a id="openNav" href="#"><i className="fa-solid fa-bars"></i></a>
        </nav>
    </div>
  )
}

export default NavBar