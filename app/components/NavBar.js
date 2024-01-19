import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function NavBar () {
    return (
        <>
        <div className="nav w-4/5 mx-auto bg-[#012533]">
          <div className="mt-3  mb-3 flex items-center justify-end gap-5 text-lg">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
              Home
            </ScrollLink>

            <ScrollLink to="About" smooth={true} duration={500} className="cursor-pointer">
              About Us
            </ScrollLink>

            <ScrollLink to="Contact" smooth={true} duration={500} className="cursor-pointer">
              Contact
            </ScrollLink>
          </div>

        </div>
        </>
    );
}

export default NavBar;