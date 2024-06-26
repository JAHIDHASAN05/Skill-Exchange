import React from 'react';

const Navbar = () => {

    const navItems = <>
        <ul className="menu menu-horizontal px-1 text-xl">
            <li><a>Home</a></li>
            <li><a>Instructor</a></li>

            <li><a>Classes</a></li>
        </ul>

    </>
    return (
        <div className="navbar bg-[#DEF7FF] fixed z-10 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Instructor</a></li>
                        <li><a>Classes</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl  md:text-4xl font-extrabold">Skill Exchange</a>
            </div>
            <div className="navbar-center hidden md:flex  font-bold">
                {navItems}
            </div>
            <div className="navbar-end">
                <a className="btn">Profile</a>
            </div>
        </div>
    );
};

export default Navbar;