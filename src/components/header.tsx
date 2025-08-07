"use client";

import Image from "next/image";
import Logo from "./logo";
import { NAV_CTAS } from "@/lib/constants";
import { useSidebar } from "@/context/sidebar-context";
import { Icon } from "@iconify/react";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-7 justify-between w-max">
        <button onClick={toggleSidebar} className="cursor-pointer">
          <Icon icon="quill:hamburger" className="h-7 w-7" />
        </button>

        <Logo />
      </div>

      <div className="gap-7 flex items-center">
        {NAV_CTAS.map(({ alt, src, width, height }) => (
          <button key={alt}>
            <Image src={src} alt={alt} width={width} height={height} />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
