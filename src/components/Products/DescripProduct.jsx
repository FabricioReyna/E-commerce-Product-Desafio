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
        <span className="text-right">$250.00</span>
      </div>

      <div>
        <div className="flex justify-between">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </section>
  );
};
