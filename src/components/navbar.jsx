import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

      {/* Logo */}
      <Link
        href="/"
        className="text-4xl font-bold"
      >
        Rwiddhi
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-12">
        <Link href="#projects" className="text-xl hover:opacity-70 transition">
          Projects
        </Link>

        <Link href="#experience" className="text-xl hover:opacity-70 transition">
          Experience
        </Link>

        <Link href="#skills" className="text-xl hover:opacity-70 transition">
          Skills
        </Link>

        <Link href="#contact" className="text-xl hover:opacity-70 transition">
          Contact
        </Link>

        <ThemeToggle />
      </div>

    </nav>
  );
};

export default Navbar;