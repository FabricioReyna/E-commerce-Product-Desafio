import { useState } from "react";
import ImagesSliders from "./ImagesSliders";

export default ({ PasadoImagenes, PasadoImagenesSmall }) => {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const OpenModal = () => {
   window.innerWidth > 767 && setIsOpenModal(true) ;
  };
  const CloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <ImagesSliders
        PasadoImagenes={PasadoImagenes}
        PasadoImagenesSmall={PasadoImagenesSmall}
        className="grid md:grid-cols-4 md:gap-4 "
        onClick={OpenModal}
      />
      {IsOpenModal && (
        <>
          <ImagesSliders
            PasadoImagenes={PasadoImagenes}
            PasadoImagenesSmall={PasadoImagenesSmall}
            IsOpenModal={IsOpenModal}
            className=" hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
            CloseModal={CloseModal}
          />
          <span
            className="fixed top-0 left-0 h-full w-full bg-black/70"
            onClick={CloseModal}
          >
           
          </span>
        </>
      )}
    </>
  );
};
