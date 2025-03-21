import CustomImage from "./CustomImage";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  imageSrc: string;
}

const Testimonial = ({ quote, name, imageSrc }: TestimonialProps) => {
  return (
    <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-secondary">
          <CustomImage
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-muted-foreground italic mb-4">"{quote}"</p>
        <p className="font-semibold text-primary">{name}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Zenith Financial Advisors transformed my financial outlook with their innovative approach and exceptional service. Highly recommended!",
      name: "John Michael Miller",
      imageSrc: "https://ext.same-assets.com/508088011/3311831106.jpeg",
    },
    {
      quote: "The bold design and professionalism of Zenith Financial Advisors made my experience truly remarkable and trustworthy.",
      name: "James Edward Brown",
      imageSrc: "https://ext.same-assets.com/1853771494/706934750.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
