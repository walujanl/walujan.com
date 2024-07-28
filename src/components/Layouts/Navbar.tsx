import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { HeaderLogo } from "../Images/WebsiteLogo";
import { WebsitePage } from "@/lib/MainConstants";

const useFixedNavbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollNav();
    };
    const navbar = document.getElementById("nav-header");
    const scrollNav = () => {
      if (!navbar) return;
      if (window.pageYOffset > 0) {
        navbar.classList.add("fixed-nav");
      } else {
        navbar.classList.remove("fixed-nav");
      }
    };
  }, []);
};

export const Navbar = () => {
  useFixedNavbar();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  const pathName = usePathname();
  return (
    <header className="nav-header" id="nav-header">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link href={"/"} className="block py-6">
              <HeaderLogo />
            </Link>
          </div>

          <div className="flex items-center px-4">
            <button
              title="menu"
              className="absolute block right-4 lg:hidden focus:outline-none dark:text-gray-400"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                viewBox="0 96 960 960"
                height="48"
                width="48"
                fill="currentColor"
              >
                {navbarOpen ? (
                  <path d="m252 830-25-26 228-228-228-229 25-26 229 229 227-229 25 26-227 229 227 228-25 26-227-229-229 229Z" />
                ) : (
                  <path d="M137 789v-35h687v35H137Zm0-196v-35h687v35H137Zm0-195v-35h687v35H137Z" />
                )}
              </svg>
            </button>
            <nav
              className={`${
                navbarOpen ? "bg-white dark:bg-darkPrimary" : "hidden"
              } navbar-mobile-menu`}
            >
              <ul className="block lg:flex">
                {WebsitePage.map((link) => (
                  <li
                    className={
                      pathName === link.path ||
                      (pathName.startsWith(link.path) && link.path !== "/")
                        ? "nav-menu-list-current"
                        : "nav-menu-list"
                    }
                    key={link.title}
                  >
                    <Link href={`${link.path}`}>{link.title}</Link>
                  </li>
                ))}

                <li className="group">
                  <div className="flex">
                    <button
                      title="Theme Toggle"
                      className="dark-mode-button"
                      onClick={() =>
                        setTheme(
                          theme === "dark" || resolvedTheme === "dark"
                            ? "light"
                            : "dark"
                        )
                      }
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {mounted &&
                        (theme === "dark" || resolvedTheme === "dark") ? (
                          <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        ) : (
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
