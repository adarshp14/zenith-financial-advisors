import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface PricingFeature {
  text: string;
  highlight?: boolean;
}

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaLink: string;
}

const PricingTier = ({
  title,
  description,
  price,
  features,
  ctaLabel,
  ctaLink,
}: PricingTierProps) => {
  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-playfair text-primary">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <p className="text-3xl font-bold text-secondary">{price}</p>
          <p className="text-sm text-muted-foreground">USD onwards</p>
        </div>
        <h4 className="font-semibold mb-2">What's Included:</h4>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${feature.highlight ? 'text-primary font-semibold' : ''}`}>
              <span className="inline-block mr-2">•</span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={ctaLink} className="w-full">
          <Button className="w-full bg-secondary hover:bg-secondary/90">
            {ctaLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      title: "Federal Tax Return Preparation (Domestic US client)",
      description: "Our service is designed to provide stress-free and accurate tax filing for U.S.-based clients.",
      price: "$349",
      features: [
        { text: "Form 1040: The primary form for U.S. individual income tax returns.", highlight: true },
        { text: "Schedules A-E: Supporting forms for itemized deductions, self-employment income, rental properties, and more." },
        { text: "Up to 3 Schedule K-1s: Reporting income, losses, or dividends from partnerships or estates." },
        { text: "Up to 20 bank and brokerage transactions." },
      ],
      ctaLabel: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      title: "Federal Tax Return Preparation (Expatriate US client)",
      description: "Our most common service for Americans who have earned income while living abroad, foreign nationals, and those who have recently repatriated to the US.",
      price: "$499",
      features: [
        { text: "Form 1040: the main form in your tax return.", highlight: true },
        { text: "Form 1116: to claim the Foreign Tax Credit." },
        { text: "Form 2555: to claim the Foreign Earned Income Exclusion, or FEIE." },
        { text: "All Standard Schedules A-E." },
        { text: "Up to 3 Schedule K-1s (for reporting income, loss or dividends from your share of a partnership)" },
        { text: "Up to 20 bank and brokerage transactions." },
      ],
      ctaLabel: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      title: "Streamlined Filing Package",
      description: "Has it been a while since your last filed a US tax return? Our flat fee package saves you money and makes getting caught up as hassle-free as possible!",
      price: "$1,499",
      features: [
        { text: "3 years of delinquent Federal Tax Return: everything included in our Federal Tax Return Preparation package x3)", highlight: true },
        { text: "6 years of FBARS: up to 5 accounts per FBAR form and $50 for each additional 5 accounts" },
        { text: "Assistance with Form 14653: which certifies that tax delinquency was non-willful" },
      ],
      ctaLabel: "Contact Us",
      ctaLink: "/contact-us",
    },
  ];

  return (
    <section className="py-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://ext.same-assets.com/1996126627/2801947136.jpeg')" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl text-primary font-playfair text-center mb-4">
          Affordable Tax Pricing
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Explore our pricing plans tailored for your tax needs with exceptional support and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              description={tier.description}
              price={tier.price}
              features={tier.features}
              ctaLabel={tier.ctaLabel}
              ctaLink={tier.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
