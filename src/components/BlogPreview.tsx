import CustomImage from "./CustomImage";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
}

const BlogPost = ({ title, subtitle, date, readTime, href, imageSrc }: BlogPostProps) => {
  return (
    <Link href={href}>
      <Card className="h-full overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <CustomImage
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-playfair text-primary">
            {title}
          </CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-sm text-muted-foreground">
            {date} • {readTime} read
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "What's New in U.S. Taxes for 2024? Key Updates You Can't Ignore",
      subtitle: "What They Mean for Your Wallet",
      date: "1/8/2025",
      readTime: "4 min",
      href: "/whats-new-in-us-taxes-for-2024-key-updates-you-cant-ignore",
      imageSrc: "https://ext.same-assets.com/4075539407/3434311183.jpeg",
    },
    {
      title: "Maximize Your Impact: The Benefits of Donor-Advised Funds (DAFs) for Strategic Philanthropy",
      subtitle: "A new way to generate savings",
      date: "9/16/2024",
      readTime: "1 min",
      href: "/maximize-your-impact-the-benefits-of-donor-advised-funds-dafs-for-strategic-philanthropy",
      imageSrc: "https://ext.same-assets.com/549991700/3851958422.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              subtitle={post.subtitle}
              date={post.date}
              readTime={post.readTime}
              href={post.href}
              imageSrc={post.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
