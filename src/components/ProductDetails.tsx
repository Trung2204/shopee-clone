const ProductDetails = ({ productId }: { productId: string }) => {
  return (
    <main className="main-body h-auto bg-gray-200 py-6 text-black">
      <div className="main-content">
        <h1>Product Details</h1>
        <p>Product ID: {productId}</p>
      </div>
    </main>
  );
};

export default ProductDetails;
