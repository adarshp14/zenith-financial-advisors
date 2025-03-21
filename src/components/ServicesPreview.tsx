import CustomImage from "./CustomImage";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  index: number;
}

const ServiceCard = ({ title, description, imageSrc, href, index }: ServiceCardProps) => {
  return (
    <ScrollAnimation
      animation="slide-in-bottom"
      delay={index * 150}
      className="h-full"
    >
      <Link href={href} className="group h-full">
        <div className="bg-light-gray rounded-md overflow-hidden shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg h-full flex flex-col hover-lift">
          <div className="relative h-48">
            <CustomImage
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-center mb-2">
              <span className="text-secondary font-normal">{title.split(':')[0]}</span>
              {title.includes(':') && <span className="text-primary">: {title.split(':')[1]}</span>}
            </h3>
            <p className="text-muted-foreground text-center">{description}</p>
          </div>
        </div>
      </Link>
    </ScrollAnimation>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      title: "Individual Taxes",
      description: "Your Path to Bigger Refunds!",
      imageSrc: "https://ext.same-assets.com/2953304143/3661661279.jpeg",
      href: "/individual-tax-services",
    },
    {
      title: "Corporate Services",
      description: "From Strategy to Success!",
      imageSrc: "https://ext.same-assets.com/3885806779/1655261139.jpeg",
      href: "/corporate-tax-services",
    },
    {
      title: "Accounting Redefined",
      description: "Your Numbers, Our Expertise!",
      imageSrc: "https://ext.same-assets.com/41482653/837236722.jpeg",
      href: "/accounting-services",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-playfair text-primary text-center mb-2">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive financial and tax services designed to meet your unique needs.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
