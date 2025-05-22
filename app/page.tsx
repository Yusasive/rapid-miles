import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Partners />
      <About />
      <VisionMission />
      <Services />
      <ContactUs />
    </div>
  );
}
