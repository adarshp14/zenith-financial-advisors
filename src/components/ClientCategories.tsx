import CustomImage from "./CustomImage";
import ScrollAnimation from "./ScrollAnimation";

interface ClientCategoryProps {
  title: string;
  imageSrc: string;
  index: number;
}

const ClientCategory = ({ title, imageSrc, index }: ClientCategoryProps) => {
  return (
    <ScrollAnimation
      animation="scale-in"
      delay={index * 100}
      className="h-full"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full hover-lift">
        <div className="relative h-56">
          <CustomImage
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-center text-sm font-semibold text-primary">{title}</h3>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const ClientCategories = () => {
  const categories = [
    {
      title: "US Citizens Living Abroad",
      imageSrc: "https://ext.same-assets.com/2828990269/1215281005.jpeg",
    },
    {
      title: "Foreign Business Owners",
      imageSrc: "https://ext.same-assets.com/3191573446/116093655.jpeg",
    },
    {
      title: "Self-Employed Expats",
      imageSrc: "https://ext.same-assets.com/1148220933/3678120260.jpeg",
    },
    {
      title: "Foreign Bank Account Holders",
      imageSrc: "https://ext.same-assets.com/196446674/2649759073.jpeg",
    },
    {
      title: "Dual Citizens",
      imageSrc: "https://ext.same-assets.com/3349315113/12883608.jpeg",
    },
    {
      title: "Accidental Americans",
      imageSrc: "https://ext.same-assets.com/2613977907/3671878779.jpeg",
    },
    {
      title: "US Expats moving back to America",
      imageSrc: "https://ext.same-assets.com/352362272/3634927973.jpeg",
    },
    {
      title: "Retirees Abroad",
      imageSrc: "https://ext.same-assets.com/913110800/2690457563.jpeg",
    },
    {
      title: "Business Abroad",
      imageSrc: "https://ext.same-assets.com/3820004963/3503017631.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in" className="mb-10">
          <h2 className="text-2xl md:text-3xl text-primary font-playfair text-center mb-4">
            Who we help?
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover our innovative financial services designed for modern clients seeking trust and sophistication.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ClientCategory
              key={index}
              title={category.title}
              imageSrc={category.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCategories;
