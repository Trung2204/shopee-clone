import { FetchedData, FetchedProductById } from "@/types/fetched.data.type";
import ProductCardList from "./ProductCardList";
import { Product } from "@/types/product.type";
import { formatSold } from "@/utils/formatSold";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import ProductImageMagnifier from "./ProductImageMagnifier";
import ProductImageSlider from "./ProductImageSlider";
import { ImageSlide } from "@/types/image.slide.type";

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

  // Get Product Details
  const productDataById = await getProductById({ id: productId });

  // Image Magnifier
  const image = productDataById.image;
  // Image Slider
  const images = productDataById.images;
  const imageSlideList: ImageSlide[] = images.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `variant ${index}`,
  }));
  // console.log(imageSlideList);

  // Product Details
  const productName = productDataById.name;
  const rating = productDataById.rating;
  const sold = productDataById.sold;
  const price_before_discount = productDataById.price_before_discount;
  const price = productDataById.price;
  const quanity = productDataById.quantity;
  const description = productDataById.description;

  // Similar Products
  const categoryId = productDataById.category._id;
  const productDataByCategory = await getProductsByCategory({
    categoryId: categoryId,
  });
  const products: Product[] = productDataByCategory.products;

  return (
    <main className="main-body h-auto bg-gray-200 py-6 text-black">
      {/* Product Details */}
      <section className="main-content">
        <div className="bg-white p-4 shadow">
          <div className="grid grid-cols-12 gap-9">
            {/* Image */}
            <div className="col-span-5">
              {/* Image Magnifier*/}
              <ProductImageMagnifier imageSrc={image} />

              {/* Image Slider */}
              <ProductImageSlider imageSlideList={imageSlideList} />
            </div>
            {/* Text */}
            <div className="col-span-7">
              {/* Product Name */}
              <h1 className="text-xl font-medium uppercase">{productName}</h1>
              {/* Rating + Sold */}
              <div className="mt-8 flex items-center">
                <div className="flex items-center">
                  <span className="mr-1 border-b border-b-orange-primary text-orange-primary">
                    {rating}
                  </span>
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          className="h-4 w-4 fill-orange-primary text-orange-primary"
                        >
                          <polygon
                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="fill-gray-300 text-gray-300 h-4 w-4"
                      >
                        <polygon
                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          className="h-4 w-4 fill-orange-primary text-orange-primary"
                        >
                          <polygon
                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="fill-gray-300 text-gray-300 h-4 w-4"
                      >
                        <polygon
                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          className="h-4 w-4 fill-orange-primary text-orange-primary"
                        >
                          <polygon
                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="fill-gray-300 text-gray-300 h-4 w-4"
                      >
                        <polygon
                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          className="h-4 w-4 fill-orange-primary text-orange-primary"
                        >
                          <polygon
                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="fill-gray-300 text-gray-300 h-4 w-4"
                      >
                        <polygon
                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: "50%" }}
                      >
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          className="h-4 w-4 fill-orange-primary text-orange-primary"
                        >
                          <polygon
                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="fill-gray-300 text-gray-300 h-4 w-4"
                      >
                        <polygon
                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mx-4 h-4 w-[1px] bg-gray-300"></div>
                <div>
                  <span>{formatSold(sold)}</span>
                  <span className="ml-1 text-gray-500">Sold</span>
                </div>
              </div>
              {/* Price */}
              <div className="mt-8 flex items-center bg-gray-50 px-5 py-4">
                <div className="text-gray-500 line-through">
                  <span className="text-sm">₫</span>
                  <span className="text-base">
                    {formatPrice(price_before_discount)}
                  </span>
                </div>
                <div className="ml-3 text-3xl font-medium text-orange-primary">
                  <span className="text-sm">₫</span>
                  <span>{formatPrice(price)}</span>
                </div>
                <div className="ml-4 rounded-sm bg-orange-primary px-1 py-[2px] text-xs font-semibold uppercase text-white">
                  <span>
                    {Math.round(
                      ((price_before_discount - price) /
                        price_before_discount) *
                        100
                    )}
                  </span>
                  <span>% Off</span>
                </div>
              </div>
              {/* Quantity Buttons */}
              <div className="mt-8 flex items-center">
                <p className="capitalize text-gray-500">Quantity</p>
                <div className="flex items-center ml-10">
                  <button className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      ></path>
                    </svg>
                  </button>
                  <div className="">
                    <input
                      className="h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none"
                      value="1"
                      readOnly
                    />
                    <div className="hidden"></div>
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="ml-6 text-sm text-gray-500">
                  {quanity} Available Products
                </div>
              </div>
              {/* Add to Cart/ Buy Buttons */}
              <div className="mt-8 flex items-center">
                <button className="flex h-12 items-center justify-center rounded-sm border border-orange-primary bg-orange-primary/10 px-5 capitalize text-orange-primary shadow-sm hover:bg-orange-primary/5">
                  <Image
                    src="/assets/icons/add-to-cart.svg"
                    alt="Add to Cart Icon"
                    width={50}
                    height={50}
                    className="mr-[10px] h-5 w-5 fill-current stroke-orange-primary text-orange-primary"
                  />
                  Add to Cart
                </button>
                <button className="fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange-primary px-5 capitalize text-white shadow-sm outline-none hover:bg-orange-primary/90">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
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
