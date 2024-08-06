import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import { MainServerSide } from "@/components/MainServerSide";

export default function Home() {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Main Body */}
      <Main />
      <MainServerSide />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
