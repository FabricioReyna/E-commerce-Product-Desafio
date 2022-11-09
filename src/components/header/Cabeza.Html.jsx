import logoSneakers from "@/assets/images/logo.svg";
import AvatarImagenes from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";
const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden bg-white  font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:h-auto md:bg-transparent md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:h-auto md:bg-transparent md:p-0"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden bg-white  font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:h-auto md:bg-transparent md:p-0"
    );
  };

  return (
    <>
      <header className=" container mx-auto  flex items-center gap-4   py-4 md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={logoSneakers}
          alt="logoSneakers"
          className="mr-auto mb-1  md:mr-0"
        />
        <nav className={navClass}>
          <button className=" mb-8 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Colecciones" />
          <NavLinkHeader text="Hombre" />
          <NavLinkHeader text="Mujer" />
          <NavLinkHeader text="Sobre" />
          <NavLinkHeader text="Contacto" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImagenes} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-auto bg-slate-200 md:block"></span>
    </>
  );
};
export default MainHeader;
