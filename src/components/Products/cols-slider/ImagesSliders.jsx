// PreviewNextIcons
import { useState } from "react";

import NextIcon from "@/components/icons/NextIcon";
import PreviewIcon from "@/components/icons/PreviewIcons";
import { useRef } from "react";
import { useEffect } from "react";

export default ({
  PasadoImagenes = [],
  PasadoImagenesSmall = [],
  IsOpenModal = false,
  CloseModal = null,
  ...props
}) => {
  const BtnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(
    () => {
      if (IsOpenModal) {
        BtnSlider.current.classList.remove("md:hidden");
      }
    },
    { IsOpenModal }
  );

  const handleNextMenu = () => {
    if (index === PasadoImagenes.length - 1) return setIndex(0);
    setIndex(index + 1);
  };
  const handlePrevMenu = () => {
    console.log("prev");
    if (index === 0) return setIndex(PasadoImagenes.length - 1);
    setIndex(index - 1);
  };

  return (
    <section {...props}>
      {IsOpenModal && (
        <button onClick={CloseModal} className="md:col-span-4 md:text-right">
          X
        </button>
      )}
      <div className="relative col-span-4  md:gap-3">
        <img
          src={PasadoImagenes[index]}
          alt="al"
          className="md:aspect-md  aspect-[16/13] md:cursor-pointer md:rounded-md"
        />
        <div
          ref={BtnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between p-2 px-4 md:hidden"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handlePrevMenu}
          >
            <PreviewIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleNextMenu}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {PasadoImagenesSmall.map((smallImg, i) => (
        <div
          onClick={() => {
            setIndex(i);
          }}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <img
            key={i}
            src={smallImg}
            alt="al"
            className="hidden md:block md:rounded-md "
          />
          <span className={`absolute  top-0 h-full w-full cursor-pointer border-2 hover:border-orange-400 hover:bg-[rgba(255,255,255,0.5)] ${i === index && "bg-[rgba(255,255,255,0.5)] border-orange-400" }`}></span>
        </div>
      ))}
    </section>
  );
};
