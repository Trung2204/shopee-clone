import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import { Fragment } from "react";

export default function ProductDetailsPage({
  params,
}: {
  params: { productUrl: string };
}) {
  const { productUrl } = params;
  const productId = productUrl.split("-i-")[1];

  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Main Body */}
      <ProductDetails productId={productId} />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
