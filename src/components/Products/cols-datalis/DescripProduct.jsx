 
// import PlusIcon from "@/components/icons/PlusIcon";

import CartIcons from "@/components/icons/CartIcons";
import { useState } from "react";

// import MinusIcon from "@/components/icons/MinusIcon";
// const MinusButtonStack = () => {
//   addEventListener("click", () =>{
//     plusContent.value - 1
//   });
// };
// const PlusButtonStack = () => {
//   addEventListener("click", () =>{
//     plusContent.value + 1
//   });
// };

export default () => {
  const content = () =>{
    console.log(content.value)
  }
  const Minus = () =>{
      const minusplus = document.getElementById("sas")
    console.log("click")
  }

  return (
    <section className=" px-4  mx-auto  md:px-0 ">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-300">
        {" "}
        Sneaker Company
      </p>
      <h2 className="mb-3 font-bold"> Fall Limited Edition Sneakers</h2>
      <p className="mb-3 text-gray-400">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-5 grid grids-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] ">
        <span className="text-3xl pr-4 md:pr-0 md:text-1x1 "> $125.00</span>
        <span className="text-orange-400 bg-orange-100 mr-auto
rounded-md py-1 px-2 "> 50%</span>
        <span className="text-right text-Grayish-blue text-lg line-through md:col-span-2 md:text-left">$250.00</span>
      </div>

      <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
        <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
          <button className="text-Orange-primary font-bold" onClick={Minus} >-</button>
          <span className="Font-bold" id="Sas">0</span>
          <button className="text-Orange-primary font-bold" >+</button>
        </div>
        <div className=" flex bg-Orange-primary  py-3 rounded-lg text-white justify-center items-center gap-x-4  hover:bg-orange-600 transition-all md:col-span-1 cursor-pointer" >
            <span className="text-white"><CartIcons fill="#fff"/></span>
        <button className=" font-bold">Add to cart</button>
        </div>
      </div>
    </section>
  );
};
