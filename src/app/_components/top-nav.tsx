import Image from "next/image";

export const TopNav = () => {
  return (
    <nav className="flex justify-between items-center px-4 w-full">
      <Image
        src="/logo-shmecond.png"
        width={100}
        height={100}
        alt="Shmecond Hand Logo"
      />
      <button className="rounded-md bg-rose-600 hover:bg-rose-400 p-2 transition-colors">
        Add product
      </button>
    </nav>
  );
};
