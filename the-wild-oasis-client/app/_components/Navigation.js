import Link from "next/link";
import { auth } from "@/app/_lib/auth";
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
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link href="/account">
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={`${session.user.name}'s Image`}
              />
            </Link>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}
