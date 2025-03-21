import { Separator } from "@/components/ui/separator";

const StatsSection = () => {
  const stats = [
    {
      value: "150+",
      label: "Clients Served",
    },
    {
      value: "15+",
      label: "Years Trusted by Clients",
    },
    {
      value: "1,000+",
      label: "Tax Returns Delivered",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-primary font-playfair text-center mb-12">
          Elevating Financial Advisory Services
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          At Zenith Financial Advisors, we redefine professionalism with a bold, contemporary approach,
          combining dynamic visuals and innovative design to enhance your financial journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
