import Header from "@/components/header";
import ShortUrl from "./shortUrl/page";
import Slider from "@/components/slider";
import Footer from "@/components/footer";
import Boost from "@/components/boost";
import Advanced from "@/components/advanced";

export default function Home() {
  return (
    <div className="container">
      <div className="body">
        <Header />
        <Slider />
      </div>
      <ShortUrl />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}
