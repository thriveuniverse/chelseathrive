import Link from "next/link";
import { navItems } from "../lib/nav";

export default function Footer() {
  return (
    <footer className="bg-[#090b0e] border-t border-[#232830] py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-[#8791a0] space-y-4">
        <nav className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#c7cdd6] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://thethriveclan.com"
            className="hover:text-[#c7cdd6] transition-colors"
          >
            The Thrive Clan
          </a>
          <a
            href="https://last-prompt.com"
            className="hover:text-[#c7cdd6] transition-colors"
          >
            Last Prompt
          </a>
        </div>

        <div>© {new Date().getFullYear()} Chelsea Thrive · All rights reserved.</div>
      </div>
    </footer>
  );
}
