import { useRef } from "react";
import { useState } from "react";
import ImagesSliders from "./ImagesSliders";

export default ({ PasadoImagenes, PasadoImagenesSmall }) => {
  const [IsOpenModal, setIsOpenModal] = useState(false)
  const OpenModal = () => {
    setIsOpenModal(true)
 
  }
  const CloseModal = () =>{
    setIsOpenModal(false)
  }
  return (
       

    <>
      <ImagesSliders
        PasadoImagenes={PasadoImagenes}
        PasadoImagenesSmall={PasadoImagenesSmall}
        className="grid md:grid-cols-4 md:gap-4 "
        onClick={OpenModal}
      />
      {IsOpenModal &&(
      <ImagesSliders
        PasadoImagenes={PasadoImagenes}
        PasadoImagenesSmall={PasadoImagenesSmall}
        IsOpenModal={
          IsOpenModal
        }
        className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:tras md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 "
        CloseModal = {CloseModal}
      />
    )}
    </>
  );
};
