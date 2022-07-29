import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import clsxm from "@/lib/clsxm";
import useOnTop from "@/hooks/useOnTop";

import Button from "@/components/buttons/Button";
import UnstyledLink from "@/components/links/UnstyledLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/snippets", label: "Snippets" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const onTop = useOnTop();

  // We can't show/change the theme until the client renders
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={clsxm(
        "sticky top-0 z-50 bg-gray-50 dark:bg-dark",
        !onTop && "shadow-sm"
      )}
    >
      <div className="layout md:h-18 flex h-14 items-center justify-between">
        <nav>
          <ul className="flex items-start justify-between space-x-10">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsxm(
                    "border-none text-base font-semibold text-slate-500 dark:text-slate-300 md:text-lg",
                    "hover:text-primary-600 dark:hover:text-primary-400",
                    href === "/" + router.pathname.split("/")[1] &&
                      "text-black dark:text-white"
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={(theme as "light" | "dark") ?? "light"}
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </Button>
      </div>
    </header>
  );
}
