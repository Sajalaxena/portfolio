"use client"

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween mt-10 mx-40 relative z-30 py-5">
      <Link href="/">
        <Image src="/charizard-seeklogo.svg" alt="logo" width={50} height={29} />
      </Link>

      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flexCenter">
            <Link
              href={link.href}
              className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Image
        src="/menu-bar.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
