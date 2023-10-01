"use client";
import { usePathname, useRouter } from "next/navigation";

function TabMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (route: string) => {
    router.replace(route);
  };
  return (
    <div className="tabs bg-gray-100 w-[10rem] lg:w-[40rem] h-[15rem] lg:h-16 rounded-xl shadow-sm flex flex-col lg:flex-row items-center justify-around">
      <a
        className={`tab text-lg px-4 mx-2 ${
          pathname === "/menu" ? "tab-active bg-white/80 rounded-lg h-14" : ""
        }`}
        onClick={() => handleTabClick("/menu")}
      >
        Menu
      </a>
      <a
        className={`tab text-lg px-4 mx-2 ${
          pathname === "/order" ? "tab-active bg-white/80 rounded-lg h-14" : ""
        }`}
        onClick={() => handleTabClick("/order")}
      >
        Order
      </a>
      <a
        className={`tab text-lg px-4 mx-2 ${
          pathname === "/dapur" ? "tab-active bg-white/80 rounded-lg h-14" : ""
        }`}
        onClick={() => handleTabClick("/dapur")}
      >
        Dapur
      </a>
      <a
        className={`tab text-lg px-4 mx-2 ${
          pathname === "/kasir" ? "tab-active bg-white/80 rounded-lg h-14" : ""
        }`}
        onClick={() => handleTabClick("/kasir")}
      >
        Kasir
      </a>
      <a
        className={`tab text-lg px-4 mx-2 ${
          pathname === "/penjualan"
            ? "tab-active bg-white/80 rounded-lg h-14"
            : ""
        }`}
        onClick={() => handleTabClick("/penjualan")}
      >
        Penjualan
      </a>
    </div>
  );
}

export default TabMenu;
