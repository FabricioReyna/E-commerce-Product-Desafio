// PreviewNextIcons
import NextIcon from "@/components/icons/NextIcon"
import PreviewIcon from "@/components/icons/PreviewIcons"

import ImgProduct1 from "@/assets/images/image-product-1.jpg"
import ImgProduct2 from "@/assets/images/image-product-2.jpg"
import ImgProduct3 from "@/assets/images/image-product-3.jpg"
import ImgProduct4 from "@/assets/images/image-product-4.jpg"
import ImgProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg"
import ImgProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg"
import ImgProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg"
import ImgProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg"
import { useState } from "react"

 const PasadoImagenes = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4]

export default () => {
    const [index, setIndex] = useState(0)
    const handleNextMenu = () => {
        if(index === PasadoImagenes.length - 1) return setIndex(0);
        setIndex(index + 1);
        
       
    }
    const handlePrevMenu = () => {
        console.log("prev")
        if(index === 0 ) return setIndex(PasadoImagenes.length - 1);
        setIndex(index - 1);
    }
   
    return(
        <section className="grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:p-6">
            <div className="col-span-4 md:gap-8  relative">
                <img src={PasadoImagenes[index]} alt="al" className="aspect-[16/12] md:w-50 md:rounded"/>
                <div className="absolute top-1/2 left-0 md:hidden p-2 -translate-y-1/2 w-full flex justify-between px-4">
                <button className="bg-white rounded-full w-10 h-10 grid place-items-center" onClick={handlePrevMenu} ><PreviewIcon/></button>
                <button className="bg-white rounded-full w-10 grid place-items-center h-10" onClick={handleNextMenu}><NextIcon/></button>
                </div>

            </div>
            <img src={ImgProduct1Small} alt="al" className="hidden md:block rounded"/>
            <img src={ImgProduct2Small} alt="ey" className="hidden md:block rounded" />
            <img src={ImgProduct3Small} alt="al" className="hidden md:block rounded"/>
            <img src={ImgProduct4Small} alt="san " className="hidden md:block rounded"/>
    </section>
    )
}
