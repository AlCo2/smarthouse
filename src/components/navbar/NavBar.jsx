import React from 'react'
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { AiFillDashboard, AiFillHome, AiFillSetting, AiOutlineLogout, AiOutlinePhone } from 'react-icons/ai';
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
                    <li><Link href="/"><AiFillHome/> Home</Link></li>
                    <li><Link href="Dashboard"><AiFillDashboard/> Dashboard</Link></li>
                    <li><Link href="addDevices"><AiOutlinePhone/> Add a device</Link></li>
                    <li><Link href="settings"><AiFillSetting/> Settings</Link></li>
                    <li><Link href="" onClick={()=>signOut()}><AiOutlineLogout/> Logout</Link></li>
                </ul>
            </div>
            <a id="openNav" href="#"><i className="fa-solid fa-bars"></i></a>
        </nav>
    </div>
  )
}

export default NavBar