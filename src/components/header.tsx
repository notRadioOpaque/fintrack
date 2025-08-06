import Image from "next/image";
import Logo from "./logo";
import { NAV_CTAS } from "@/lib/constants";
import { menu_icon } from "@/assets/icons";

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-7 justify-between w-max">
        <button className="cursor-pointer">
          <Image src={menu_icon} alt="logo" width={24} height={24} />
        </button>

        <Logo />
      </div>

      <div className="gap-7 flex items-center">
        {NAV_CTAS.map(({ alt, src, width, height }) => (
          <button key={alt}>
            <Image src={src} alt="search icon" width={width} height={height} />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
