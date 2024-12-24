"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navMenuList } from "@/data";

import { cn } from "@/lib/utils";

const NavMenu = () => {
  const currentPath = usePathname();

  return (
    <ul className="flex items-center justify-around gap-6">
      {navMenuList.map(({ href, title }) => (
        <li
          key={href}
          className={cn(
            "rounded-md px-4 py-2 transition-colors",
            currentPath === href
              ? "bg-primary text-white"
              : "bg-transparent hover:bg-primary/10"
          )}
        >
          <Link
            href={href}
            className={cn(
              "text-primary transition-colors hover:text-primary/80",
              currentPath === href && "font-bold text-white hover:text-white"
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
