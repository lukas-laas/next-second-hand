import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  return (
    <nav className="flex justify-between items-center px-4 w-full">
      <Link href={"/"}>
        <Image
          src="/logo-shmecond.png"
          width={100}
          height={100}
          alt="Shmecond Hand Logo"
        />
      </Link>
      <Link
        href={"/add-product"}
        className="rounded-md bg-rose-600 hover:bg-rose-400 p-2 transition-colors"
      >
        Add product
      </Link>
    </nav>
  );
};
