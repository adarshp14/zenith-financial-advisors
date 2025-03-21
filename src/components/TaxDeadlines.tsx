import { Button } from "@/components/ui/button";
import CustomImage from "./CustomImage";
import Link from "next/link";

const TaxDeadlines = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl text-primary font-playfair mb-4">
              Stay informed on Tax Deadlines
            </h2>
            <p className="text-muted-foreground mb-4">
              Stay informed on key tax deadlines and financial dates with our Important Dates section.
            </p>
            <p className="text-muted-foreground mb-4">
              Stay up to date on Canada and US Tax deadlines.
            </p>
            <p className="text-muted-foreground mb-8">
              Expertly curated tax deadlines calendar
            </p>
            <Link href="/tax-deadlines">
              <Button className="bg-secondary hover:bg-secondary/90">
                Learn more
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-md overflow-hidden shadow-lg">
              <CustomImage
                src="https://ext.same-assets.com/199709794/38777472.jpeg"
                alt="Tax Deadlines Calendar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxDeadlines;
