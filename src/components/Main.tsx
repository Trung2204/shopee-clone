// "use client";

// import React, {
//   ChangeEvent,
//   FC,
//   FormEvent,
//   Fragment,
//   useEffect,
//   useState,
// } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";
// import Link from "next/link";
// import { Product } from "@/types/product.type";
// import { Category } from "@/types/category.type";
// import ProductCardList from "./ProductCardList";

// const Main = () => {
//   const [searchText, setsearchText] = useState("");
//   const handleSearchChange = (e: ChangeEvent) => {};
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     console.log("Form submitted");
//   };
//   const starData = [
//     { full: 5, empty: 0 },
//     { full: 4, empty: 1 },
//     { full: 3, empty: 2 },
//     { full: 2, empty: 3 },
//     { full: 1, empty: 4 },
//   ];

//   const searchParams = useSearchParams();
//   const pageParam = searchParams.get("page");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const page = pageParam ? parseInt(pageParam) : 1;
//   const totalPages = 3;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch(`/api/products?page=${page}`); // sends a GET request to the specified endpoint.
//       const fetchedData = await response.json(); // parses the response as JSON

//       setProducts(fetchedData.data.products);
//     };

//     fetchProducts(); // calls the function
//   }, [page]); // dependency array: tells React to re-run the effect whenever the value of page changes

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const response = await fetch("/api/categories");
//       const fetchedData = await response.json();
//       setCategories(fetchedData.data);
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <main className="main-body h-auto bg-gray-200 py-6 text-black">
//       <div className="main-content">
//         <div className="grid grid-cols-12 gap-6">
//           {/* Filter Options */}
//           <section className="col-span-3">
//             <div className="py-4">
//               {/* All Categories */}
//               <Link
//                 href="/"
//                 className="flex items-center font-bold text-lg text-orange-primary"
//               >
//                 <Image
//                   src="/assets/icons/hamburger-list-menu.svg"
//                   alt="List Icon"
//                   width={15}
//                   height={15}
//                   className="mr-3 h-4 w-3 fill-current"
//                 />
//                 <span>All Categories</span>
//               </Link>
//               <div className="divider"></div>
//               {/* Category list */}
//               <ul>
//                 {categories.map((category) => (
//                   <li className="py-2 pl-2" key={category._id}>
//                     <Link href="/" className="relative px-2">
//                       {category.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               {/* Search Filter */}
//               <a
//                 href="/"
//                 className="mt-4 flex items-center font-bold uppercase"
//               >
//                 <Image
//                   src="/assets/icons/filter.svg"
//                   alt="Filter Icon"
//                   width={18}
//                   height={18}
//                   className="mr-3 h-4 w-3 fill-current stroke-current"
//                 />
//                 <span>Search Filter</span>
//               </a>
//               <div className="divider"></div>
//               {/* Price Range */}
//               <div className="my-5">
//                 <p>Price Range</p>
//                 <form className="mt-2" onSubmit={handleSubmit}>
//                   {/* Input field */}
//                   <div className="flex items-start">
//                     {/* Min Price */}
//                     <div className="grow">
//                       <input
//                         type="text"
//                         placeholder="₫ FROM"
//                         value={searchText}
//                         onChange={handleSearchChange}
//                         className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
//                       />
//                     </div>
//                     <div className="mx-2 mt-2 shrink-0">-</div>
//                     {/* Max Price */}
//                     <div className="grow">
//                       <input
//                         type="text"
//                         placeholder="₫ TO"
//                         name="price_max"
//                         value={searchText}
//                         onChange={handleSearchChange}
//                         className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
//                       />
//                     </div>
//                   </div>
//                   {/* Divider div */}
//                   <div className="mt-1 min-h-[1.25rem] text-center text-sm text-red-600"></div>
//                   {/* Submit Button */}
//                   <button className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80">
//                     <span>Apply</span>
//                   </button>
//                 </form>
//               </div>
//               <div className="divider"></div>
//               {/* Review */}
//               <p className="text-sm">Review</p>
//               <ul className="my-3">
//                 {starData.map((stars, index) => (
//                   <li key={index} className="py-1 pl-2">
//                     <div className="flex gap-1 cursor-pointer items-center text-sm">
//                       {[...Array(stars.full)].map((_, i) => (
//                         <Image
//                           key={`full-${i}`}
//                           src="/assets/icons/star-full.svg"
//                           alt="Full Star Icon"
//                           width={18}
//                           height={18}
//                         />
//                       ))}
//                       {[...Array(stars.empty)].map((_, i) => (
//                         <Image
//                           key={`empty-${i}`}
//                           src="/assets/icons/star-empty.svg"
//                           alt="Empty Star Icon"
//                           width={18}
//                           height={18}
//                         />
//                       ))}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <div className="divider"></div>
//               {/* Clear All Button */}
//               <button className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80">
//                 <span>Clear All</span>
//               </button>
//             </div>
//           </section>

//           {/* Product Area */}
//           <section className="col-span-9">
//             {/* Sort Options */}
//             <section className="bg-gray-300/40 px-3 py-4">
//               <div className="flex flex-wrap items-center justify-between gap-2">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <div>Sort By</div>
//                   <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
//                     Popular
//                   </button>
//                   <button className="h-8 px-4 text-center text-sm capitalize  bg-orange-primary text-white hover:bg-orange-primary/80">
//                     Newest
//                   </button>
//                   <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
//                     Best Selling
//                   </button>
//                   <select className="h-8  px-4 text-left text-sm capitalize  outline-none  bg-white text-black hover:bg-slate-100">
//                     <option value="" className="bg-white text-black">
//                       Price
//                     </option>
//                     <option value="asc" className="bg-white text-black">
//                       Price: Low to High
//                     </option>
//                     <option value="desc" className="bg-white text-black">
//                       Price: High to Low
//                     </option>
//                   </select>
//                 </div>
//                 {/* Pagnigation */}
//                 <div className="flex items-center">
//                   <div>
//                     <span className="text-orange-primary">{page}</span>
//                     <span>/{totalPages}</span>
//                   </div>
//                   <div className="ml-2 flex">
//                     {page > 1 ? (
//                       <Link href={`/?page=${page - 1}`} scroll={false}>
//                         <div className="rounded border px-2 py-1 shadow-sm bg-white hover:bg-slate-200">
//                           <Image
//                             src="/assets/icons/left.svg"
//                             alt="Left Icon"
//                             width={12}
//                             height={12}
//                           />
//                         </div>
//                       </Link>
//                     ) : (
//                       <div className="rounded border px-2 py-1 shadow-sm cursor-not-allowed bg-white/50">
//                         <Image
//                           src="/assets/icons/left.svg"
//                           alt="Left Icon"
//                           width={12}
//                           height={12}
//                         />
//                       </div>
//                     )}
//                     {page < totalPages ? (
//                       <Link href={`/?page=${page + 1}`} scroll={false}>
//                         <div className="rounded border px-2 py-1 shadow-sm bg-white hover:bg-slate-200">
//                           <Image
//                             src="/assets/icons/right.svg"
//                             alt="Right Icon"
//                             width={12}
//                             height={12}
//                           />
//                         </div>
//                       </Link>
//                     ) : (
//                       <div className="rounded border px-2 py-1 shadow-sm cursor-not-allowed bg-white/50">
//                         <Image
//                           src="/assets/icons/right.svg"
//                           alt="Right Icon"
//                           width={12}
//                           height={12}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* Product Listings */}
//             <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//               {/* {productItems} */}
//               <ProductCardList data={products} handleClick={() => {}} />
//             </section>
//             {/* Pagigation buttons */}
//             <div className="mt-6 flex flex-wrap justify-center">
//               {page > 1 ? (
//                 <Link href={`/?page=${page - 1}`} scroll={false}>
//                   <div className="mx-2 rounded border px-3 py-2 shadow-sm bg-white">
//                     Prev
//                   </div>
//                 </Link>
//               ) : (
//                 <div className="mx-2 rounded border px-3 py-2 shadow-sm cursor-not-allowed bg-white/50">
//                   Prev
//                 </div>
//               )}
//               {[1, 2, 3].map((pageNum) => (
//                 <Link key={pageNum} href={`/?page=${pageNum}`} scroll={false}>
//                   <div
//                     className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm ${
//                       page === pageNum
//                         ? "border-cyan-500"
//                         : "border-transparent"
//                     }`}
//                   >
//                     {pageNum}
//                   </div>
//                 </Link>
//               ))}
//               {page < 3 ? (
//                 <Link href={`/?page=${page + 1}`} scroll={false}>
//                   <div className="mx-2 rounded border px-3 py-2 shadow-sm bg-white">
//                     Next
//                   </div>
//                 </Link>
//               ) : (
//                 <div className="mx-2 rounded border px-3 py-2 shadow-sm cursor-not-allowed bg-white/50">
//                   Next
//                 </div>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Main;
