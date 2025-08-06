import Image from "next/image";
import Logo from "./logo";
import { app_grid_icon, menu_icon, search_icon } from "@/assets/icons";
import { image_1 } from "@/assets/images";

const NAV_CTAS = [
  {
    alt: "search icon",
    src: search_icon,
    action: () => {},
    width: 24,
    height: 24,
  },
  {
    alt: "app grid",
    src: app_grid_icon,
    action: () => {},
    width: 24,
    height: 24,
  },
  {
    alt: "profile image",
    src: image_1,
    action: () => {},
    width: 40,
    height: 40,
  },
];

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
        {NAV_CTAS.map(({ alt, src, action, width, height }) => (
          <button key={alt}>
            <Image src={src} alt="search icon" width={width} height={height} />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
