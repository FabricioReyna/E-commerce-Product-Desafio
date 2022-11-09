 
// import PlusIcon from "@/components/icons/PlusIcon";

import CartIcons from "@/components/icons/CartIcons";

// import MinusIcon from "@/components/icons/MinusIcon";

export default () => {
  return (
    <section className="container mx-auto px-4">
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
      <div className="flex justify-between items-center font-bold m-2">
        <span className="text-3xl pr-4"> $125.00</span>
        <span className="text-orange-400 bg-orange-100 mr-auto
rounded-md py-1 px-2"> 50%</span>
        <span className="text-right text-Grayish-blue text-lg line-through">$250.00</span>
      </div>

      <div className="">
        <div className="flex justify-between">
          <button className="text-Orange-primary font-bold">-</button>
          <span className="font-bold">0</span>
          <button className="text-Orange-primary font-bold">+</button>
        </div>
        <div className=" flex bg-Orange-primary text-center p-3 rounded-lg text-white justify-center items-center">
            <span className="text-white"><CartIcons/></span>
        <button className="p-2 font-bold">Add to cart</button>
        </div>
      </div>
    </section>
  );
};
