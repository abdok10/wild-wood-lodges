import Link from "next/link.js";
import { auth } from "@lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <Image
                src={session.user.image ?? ""} // Ensure that src is never null
                className="h-8 rounded-full" 
                alt={session.user.name || "Guest"} // Fallback alt text if name is missing
                height={32}
                width={32} 
              />

              <span>Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest Area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
