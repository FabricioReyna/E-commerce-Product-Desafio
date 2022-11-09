const NavLinkHeader = ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className=" text-gray-500 group-hover:text-black">{text}</span>
      <span className="absolute bottom-0 left-0 block w-full h-1 scale-x-0 group-hover:scale-x-100 group-hover:bg-orange-500 transition-all duration-200"></span>
    </a>
  );
};

export default NavLinkHeader;
