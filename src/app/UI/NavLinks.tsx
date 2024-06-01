import React from "react";
import { Link } from "react-scroll";

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
  activeSection?: string | null; // New prop to track active section
}

const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onClick,
  activeSection,
}) => {
  const links = [
    { to: "home", label: "الرئيسية" },
    { to: "pricing", label: "الأسعار" },
    { to: "about", label: "حولنا" },
    { to: "support", label: "دعم العملاء" },
    { to: "contact", label: "تواصل مع المبيعات" },
    { to: "download", label: "تحميل التطبيق" },
  ];

  return (
    <nav className={className}>
      {links.map((link, index) => (
        <Link
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          className={`block py-2 px-4 text-white rounded-full hover:font-bold  cursor-pointer ${
            activeSection === link.to ? "font-bold" : "" 
          }`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
