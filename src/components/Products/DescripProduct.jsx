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
      <div>
        <span> $125.00</span>
        <span> 50%</span>
        <span>$250.00</span>
      </div>

      <div>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </section>
  );
};
