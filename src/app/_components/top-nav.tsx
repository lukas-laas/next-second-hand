import Image from "next/image";

export const TopNav = () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-2">
      <Image
        src="/logo-shmecond.png"
        width={100}
        height={100}
        alt="Shmecond Hand Logo"
      />
      <div>Schmecond Hand</div>
      <button className="rounded-md p-2 hover:bg-gray-700 ">Add</button>
    </nav>
  );
};
