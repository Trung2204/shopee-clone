import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import MainServerSide from "@/components/MainServerSide";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    sort_by? : string;
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
      <MainServerSide searchParams={searchParams} />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
