import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import WealthSupport from "@/components/WealthSupport";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="partners">
        <Partners />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="wealth-support">
        <WealthSupport />
      </section>

      <section id="steps">
        <Steps />
      </section>

      <Footer />
    </>
  );
}
