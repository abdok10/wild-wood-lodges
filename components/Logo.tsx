import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.png";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "700"],
});

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        priority={true}
        alt="The Wild Oasis logo"
      />
      <span
        className={`${cinzel.className} text-primary-100 text-xl font-semibold`}
      >
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
