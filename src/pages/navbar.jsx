import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const NavLinks = [
    {
      Name: "Projects",
      link: "/projects",
    },
    {
      Name: "Technologies",
      link: "/technologies",
    },
    {
      Name: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center text-2xl font-semibold text-slate-200">
        <Link to="/"
        className="font-light text-4xl font-gaMaamli bg-gradient-to-r from-Neo-Blue to-Neo-Purp text-transparent bg-clip-text"
        >Phalsus</Link>
        <div className="flex justify-between items-center">
          {NavLinks.map((links) => (
            <Link
              key={links.Name}
              className="mx-1 px-3 group py-2  relative text-center overflow-hidden"
              to={links.link}
            >
              {links.Name}
              <div className=" absolute transition-all -translate-x-60 bottom-1 left-0 w-0 pl-4 group-hover:translate-x-0 group-hover:w-full h-1 group-hover:bg-gradient-to-r from-Neo-Purp to-Neo-Blue"></div>
            </Link>
          ))}
        </div>
        <div>contact</div>
      </nav>
      <Outlet />
    </>
  );
};
