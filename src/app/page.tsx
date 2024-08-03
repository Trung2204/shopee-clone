import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col justify-between">
      {/* Header */}
      <Header />
      {/* Main Body */}
      <Main />
      {/* Footer */}
      <Footer />
    </section>
  );
}
