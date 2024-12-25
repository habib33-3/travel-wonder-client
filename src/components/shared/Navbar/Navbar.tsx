import { ThemeToggle } from "@/components/ThemeToggle";

import Logo from "../Logo/Logo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="w-full bg-primary-foreground">
      <nav className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-4 shadow-sm md:flex">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <NavMenu />
        </div>
        <div className="">
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
