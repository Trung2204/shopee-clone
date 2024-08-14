import { FetchedData, FetchedProductById } from "@/types/fetched.data.type";
import ProductCardList from "./ProductCardList";
import { Product } from "@/types/product.type";

const ProductDetails = async ({ productId }: { productId: string }) => {
  async function getProductById({ id }: { id: string }) {
    const res = await fetch(`https://api-ecom.duthanhduoc.com/products/${id}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const fetchedData: FetchedProductById = await res.json();
    console.log("getProductByID", fetchedData.message);
    return fetchedData.data;
  }

  async function getProductsByCategory({ categoryId }: { categoryId: string }) {
    const res = await fetch(
      `https://api-ecom.duthanhduoc.com/products?limit=20&page=1&category=${categoryId}`
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const fetchedData: FetchedData = await res.json();
    console.log("getProductsByCategory", fetchedData.message);
    return fetchedData.data;
  }

  // Product Details
  const productDataById = await getProductById({ id: productId });
  const description = productDataById.description;

  // Similar Products
  const categoryId = "60afafe76ef5b902180aacb5";
  const productDataByCategory = await getProductsByCategory({
    categoryId: categoryId,
  });
  const products: Product[] = productDataByCategory.products;

  return (
    <main className="main-body h-auto bg-gray-200 py-6 text-black">
      {/* Product Details */}
      <section className="main-content">
        <h1>Product Details</h1>
        <p>Product ID: {productId}</p>
      </section>

      {/* Desciption */}
      <section className="mt-8">
        <div className="main-content">
          <div className=" bg-white p-4 shadow">
            <h1 className="rounded bg-gray-50 p-4 text-lg capitalize text-slate-700">
              Product Description
            </h1>
            <div className="mx-4 mb-4 mt-12 text-sm leading-loose">
              {/* Alternative: React HTML Parser - from: https://www.npmjs.com/package/react-html-parser */}
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <section className="mt-8">
        <div className="main-content">
          <h1 className="uppercase text-gray-400">You might also like</h1>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <ProductCardList productList={products} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
