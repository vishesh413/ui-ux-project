'use client';

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home */}
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* Our Courses Dropdown */}
        <Link href ="/courses">
        <MenuItem setActive={setActive} active={active} item="Courses" />
        </Link>
        
        

        {/* About Page Link */}
        <Link href="/about">
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>

        {/* Contact Us */}
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;


//set active jo hum humne state decide kiya h us basis pr decide kr leta h 