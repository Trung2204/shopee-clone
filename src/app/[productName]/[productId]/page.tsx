// export default function Page({ params }: { params: { productId: string } }) {
//   const productId = params.productId; // Access the product ID

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <p>Product ID: {productId}</p>
//     </div>
//   );
// }

export default function Page({
  params,
}: {
  params: { productName: string; productId: string };
}) {
  const { productName, productId } = params;

  // Manually decode the productName
  const decodedProductSlug = decodeURIComponent(
    productName.replace(/-i-/, " ")
  );
  console.log(productName.replace(/-i-/, " "));

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Name: {decodedProductSlug}</p>
      <p>Product ID: {productId}</p>
    </div>
  );
}
