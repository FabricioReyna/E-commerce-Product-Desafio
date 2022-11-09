const NavLinkHeader = ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className=" uppercase text-black md:text-gray-500 md:group-hover:text-black">{text}</span>
      <span className="absolute bottom-0 left-0 block w-[95px] md:w-full h-1 
      scale-x-0
      group-hover:bg-orange-500 
      group-hover:scale-x-[5px]
      md:scale-x-0 md:group-hover:scale-x-100 md:group-hover:bg-orange-500 transition-all duration-200"></span>
    </a>
  );
};

export default NavLinkHeader;
