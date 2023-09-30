"use client";
import { usePathname, useRouter } from "next/navigation";

function TabMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (route: string) => {
    router.replace(route);
  };
  return (
    <div className="tabs tabs-boxed w-[30rem] h-14 flex items-center justify-center gap-20 font-bold">
      <a
        className={`tab text-lg ${
          pathname === "/menu" ? "bg-white/80 w-24 h-12" : ""
        }`}
        onClick={() => handleTabClick("/menu")}
      >
        Menu
      </a>
      <a
        className={`tab text-lg ${
          pathname === "/order" ? "bg-white/80 w-24 h-12" : ""
        }`}
        onClick={() => handleTabClick("/order")}
      >
        Order
      </a>
      <a
        className={`tab text-lg ${
          pathname === "/kitchen" ? "bg-white/80 w-24" : ""
        }`}
        onClick={() => handleTabClick("/kitchen")}
      >
        Kitchen
      </a>
    </div>
  );
}

export default TabMenu;
