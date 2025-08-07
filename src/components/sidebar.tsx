"use client";

import { useSidebar } from "@/context/sidebar-context";
import { NAV_ITEMS } from "@/lib/constants";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  // handler fn to close sidebar on mobile screens
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        toggleSidebar();
      }, 400);
    }
  };

  return (
    <aside
      className={`transition-all duration-300 ${
        isSidebarOpen ? "w-full lg:w-[320px] mr-12" : "w-0 mr-0 overflow-hidden"
      } flex-shrink-0 flex flex-col`}
    >
      <nav role="navigation" aria-label="Sidebar navigation">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ title, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(`/${href}`);

            return (
              <li key={title}>
                <Link
                  href={href}
                  onClick={handleNavClick}
                  aria-current={isActive ? "page" : undefined}
                  className={`h-9 rounded-2xl flex items-center px-[18px] text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-secondary-bg/16 text-[#3A6C7B]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {capitalize(title)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
