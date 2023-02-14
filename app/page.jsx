import "../styles/globals.css";
// components
import Navbar from "../components/Navbar";
import GetStarted from "components/GetStarted";
import World from "components/World";
import Insights from "components/Insights";
import Feedback from "components/Feedback";
import Footer from "components/Footer";
import WhatsNew from "components/WhatsNew";
import Explore from "components/Explore";
import About from "components/About";
import Hero from "components/Hero";
// const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />{" "}
      </div>
      <World />{" "}
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
