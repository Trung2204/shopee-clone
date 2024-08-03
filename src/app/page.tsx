import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Main Body */}
      <Main />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
