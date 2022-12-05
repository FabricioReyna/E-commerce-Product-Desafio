import DescripProduct from "./cols-datalis/DescripProduct";
import MainImages from "./cols-slider/MainImages";


import ImgProduct1 from "@/assets/images/image-product-1.jpg";
import ImgProduct2 from "@/assets/images/image-product-2.jpg";
import ImgProduct3 from "@/assets/images/image-product-3.jpg";
import ImgProduct4 from "@/assets/images/image-product-4.jpg";
import ImgProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg";
import ImgProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg";
import ImgProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg";
import ImgProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg";

const PasadoImagenes = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];
const PasadoImagenesSmall = [
  ImgProduct1Small,
  ImgProduct2Small,
  ImgProduct3Small,
  ImgProduct4Small,
];

const MainMainer = () => {
  return (
    <>
      <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2  ">
        <MainImages PasadoImagenes={PasadoImagenes} PasadoImagenesSmall={PasadoImagenesSmall} />
        <DescripProduct />
      </main>
    </>
  );
};

export default MainMainer;
