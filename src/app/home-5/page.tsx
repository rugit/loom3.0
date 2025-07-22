import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeFive/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/HomeDefault/Speakers";
import EventSchedules from "@/components/HomeDefault/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Pricing from "@/components/HomeDefault/Pricing";
import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeDefault/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      <WhyUs />

      <Speakers />

      <EventSchedules />

      <FunFact />

      <Pricing />

      <Partner />

      <LatestNews />

      <BuyTicket />

      <Subscribe />

      <Footer />
    </>
  );
}
