import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomImage from "@/components/CustomImage";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
  excerpt: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      title: "What's New in U.S. Taxes for 2024? Key Updates You Can't Ignore",
      subtitle: "What They Mean for Your Wallet",
      date: "1/8/2025",
      readTime: "4 min",
      href: "/whats-new-in-us-taxes-for-2024-key-updates-you-cant-ignore",
      imageSrc: "https://ext.same-assets.com/4075539407/3434311183.jpeg",
      excerpt: "The IRS has announced several important updates for the 2024 tax year that could significantly impact your financial planning and tax liability. From adjusted tax brackets to new retirement contribution limits, these changes will affect virtually every American taxpayer."
    },
    {
      title: "Maximize Your Impact: The Benefits of Donor-Advised Funds (DAFs) for Strategic Philanthropy",
      subtitle: "A new way to generate savings",
      date: "9/16/2024",
      readTime: "1 min",
      href: "/maximize-your-impact-the-benefits-of-donor-advised-funds-dafs-for-strategic-philanthropy",
      imageSrc: "https://ext.same-assets.com/549991700/3851958422.jpeg",
      excerpt: "Donor-Advised Funds (DAFs) are becoming increasingly popular among philanthropically-minded individuals looking to maximize their charitable impact while optimizing tax benefits. These investment vehicles allow donors to make charitable contributions, receive an immediate tax deduction, and then recommend grants from the fund over time."
    },
    {
      title: "FBAR Filing Requirements: What Expats Need to Know for 2024",
      subtitle: "Important deadlines and thresholds",
      date: "6/12/2024",
      readTime: "3 min",
      href: "/fbar-filing-requirements-what-expats-need-to-know-for-2024",
      imageSrc: "https://ext.same-assets.com/2906338986/1569833860.jpeg",
      excerpt: "If you're a U.S. citizen living abroad with foreign financial accounts, you may be required to file the Foreign Bank Account Report (FBAR). This crucial filing is often overlooked, but failure to comply can result in severe penalties. Learn about the current threshold amounts, filing deadlines, and what accounts must be reported."
    },
    {
      title: "Tax Planning Strategies for Digital Nomads: Navigating the Global Workspace",
      subtitle: "Working remotely across borders",
      date: "3/22/2024",
      readTime: "5 min",
      href: "/tax-planning-strategies-for-digital-nomads-navigating-the-global-workspace",
      imageSrc: "https://ext.same-assets.com/1148220933/3678120260.jpeg",
      excerpt: "The digital nomad lifestyle offers unprecedented freedom, but it also creates unique tax challenges. As you work from different countries, understanding your tax residency status, potential double taxation issues, and available exemptions becomes essential. This comprehensive guide will help you optimize your tax situation while maintaining compliance."
    }
  ];

  return (
    <>
      <NavBar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair text-primary mb-4">Our Blog</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Stay informed with the latest news, updates, and insights from our financial experts.
            Our articles cover tax strategies, regulatory changes, and financial planning tips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.href}>
                <Card className="h-full overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-60">
                    <CustomImage
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-playfair text-primary">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-sm text-muted-foreground mt-4">
                      {post.date} • {post.readTime} read
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
