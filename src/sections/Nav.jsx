import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute z-10  w-full">
      <nav className="flex justify-start items-start max-container  pl-[170px] pt-5 rounded-full">
        <ul className=" flex flex-1 justify-start items-start gap-16 max-md:hidden ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-yellow tracking-widest font-gameplay font-bold hover:text-white text-[13px]"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
