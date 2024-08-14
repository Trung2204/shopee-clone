import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import MainSSR from "@/components/MainSSR";
import { Props } from "@/types/props.type";

export default function Home(props: Props) {
  const { searchParams } = props; // Reference: https://reacthustle.com/blog/how-to-get-nextjs-query-params-serverside-typescript
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
