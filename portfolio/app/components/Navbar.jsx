"use client"

import Link from "next/link";
import React from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 ">
        <Link href="/">Home</Link>
        <div>
          <ul>
            {/* {navLinks?.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
