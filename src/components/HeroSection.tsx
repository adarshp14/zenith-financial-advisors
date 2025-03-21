import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-20 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://ext.same-assets.com/2526705090/4292314657.jpeg')" }}
      ></div>
      <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">
          Global Tax Optimization
        </h1>
        <p className="text-xl md:text-2xl italic font-playfair mb-8">
          "Making Taxes Less Taxing"
        </p>
        <p className="text-lg md:text-xl font-medium mb-8 text-gold">
          You didn't come this far to stop
        </p>
        <Link href="/contact-us">
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300 text-white px-8 py-2 rounded-md">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
