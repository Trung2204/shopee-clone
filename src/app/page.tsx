import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import MainSSR from "@/components/MainSSR";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    // sort_by?: "view" | "createdAt" | "sold" | "price" | "";
    // order?: "asc" | "desc" | "";
    sort_by?: string;
    order?: string;
    category?: string;
  };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Main Body */}
      {/* <Main /> */}
      <MainSSR searchParams={searchParams} />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
