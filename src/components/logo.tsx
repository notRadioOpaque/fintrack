import { logo_icon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo_icon} alt="logo" width={112} height={32} />
    </Link>
  );
};

export default Logo;
