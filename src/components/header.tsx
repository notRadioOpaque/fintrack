"use client";

import Image from "next/image";
import Logo from "./logo";
import { useSidebar } from "@/context/sidebar-context";
import { Icon } from "@iconify/react";
import { image_1 } from "@/assets/images";

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
        <button className="hidden sm:block">
          <Icon icon="iconamoon:search" width="28" height="28" />
        </button>

        <button className="hidden sm:block">
          <Icon icon="mage:dashboard" width="28" height="28" />
        </button>

        <button>
          <Image src={image_1} alt="profile" width={40} height={40} />
        </button>
      </div>
    </header>
  );
};

export default Header;
