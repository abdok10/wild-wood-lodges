import Link from "next/link.js";
import Image from "next/image";
import bg from "@/public/bg.png";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "700"],
});

export default function Page() {
  return (
    <main className="mt-28">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1
          className={`${cinzel.className} text-8xl text-primary-50 mb-10 tracking-tight font-bold`}
        >
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className={`${cinzel.className} bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all`}
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
