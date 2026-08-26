"use client";

const links = [
  { title: "About", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Skills", id: "skills" },
  { title: "Contact", id: "contact" },
];

export default function NavLinks({ handleScroll }) {
  return (
    <>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => handleScroll(link.id)}
          className="
            text-lg
            font-medium
            hover:text-purple-300
            transition
          "
        >
          {link.title}
        </button>
      ))}
    </>
  );
}