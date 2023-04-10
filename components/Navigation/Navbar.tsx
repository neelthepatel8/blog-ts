import Links from "./Links";
import Logo from "./Logo";

const Navbar = () => {
  
  return (
    <div
      className="
        flex x
        flex-auto 
        justify-between 
        content-center 
        px-10 
        py-5
        w-full
        fixed
        top-0
        bg-white
        drop-shadow-xl
        "
    >
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
