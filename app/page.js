import Card from "./components/card";
import HeroSection from "./components/herosection";
import SectionHeading from "./components/sectionheading";
import { services } from "./data/data";
export default function Home() {
  const services_cards = services.map((service) => <Card key={service.title} title={service.title} description={service.description} image={service.image} />)
  return (
    <main>
      <HeroSection />
      <section>
        <SectionHeading>Services</SectionHeading>
        <div className="flex overflow-auto snap-mandatory snap-x mx-2 md:mx-8 scroll-smooth">
          {services_cards}
        </div>
      </section>
    </main>
  );
}
