const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "New blog",
    href: "/",
  },
  {
    label: "Remove blog",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

const Links = () => {
  return (
    <div className="flex flex-row gap-10">
      {links.map((link) => (
        <div key={1} className="flex items-center">
          <a href={link.href} className="
          text-xl 
          font-semibold 
          cursor-pointer
          hover:text-slate-500">
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
