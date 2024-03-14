import Link from "next/link";

export function Header() {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16 bg-teal-400 items-center drop-shadow-2xl border-b border-gray-300 shadow-md z-50">
      <Link href="/">
        <h1 className="text-2xl text-bold text-white">ポケモン図鑑</h1>
      </Link>
    </div>
  );
}
