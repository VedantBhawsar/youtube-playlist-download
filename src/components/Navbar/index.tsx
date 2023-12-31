import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="py-10 flex items-center justify-between  px-48 bg-[--primary]">
      <Link
        href={"/"}
        className="text-3xl font-[--font-family-sans-serif] text-white flex items-center gap-2 hover:underline"
        style={{ fontWeight: 500 }}
      >
        <div className="w-6 h-6 relative flex">
          <Image src={"/logo.png"} fill alt="logo" />
        </div>
        ssyoutube
      </Link>
      <div className="flex gap-8">
        <Link
          href={"/playlist"}
          className="text-xl  hover:opacity-100 hover:translate-x-1 duration-200 transition-all delay-75 text-white"
        >
          Download playlist
        </Link>
        <Link
          href={"/"}
          className="text-xl   hover:opacity-100 hover:translate-x-1 duration-200 transition-all delay-75 text-white"
        >
          Download video
        </Link>
      </div>
    </div>
  );
};
