import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
