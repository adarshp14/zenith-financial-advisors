import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomImage from "@/components/CustomImage";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson, CPA",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in international tax consulting, Sarah founded Zenith Financial Advisors to provide innovative tax solutions for expats and international businesses.",
      imageSrc: "https://ext.same-assets.com/508088011/3311831106.jpeg",
    },
    {
      name: "Michael Chen, EA",
      role: "International Tax Director",
      bio: "Michael specializes in expatriate taxation and foreign account compliance, helping clients navigate complex cross-border tax situations with confidence.",
      imageSrc: "https://ext.same-assets.com/1853771494/706934750.jpeg",
    },
    {
      name: "Jessica Rivera, MBA",
      role: "Corporate Services Manager",
      bio: "Jessica leads our corporate services division, providing strategic tax planning and compliance services for businesses operating across multiple jurisdictions.",
      imageSrc: "https://ext.same-assets.com/2906338986/1569833860.jpeg",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair text-primary mb-8">About Zenith Financial Advisors</h1>

          <div className="bg-light-gray p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-playfair text-primary mb-4">Our Mission</h2>
            <p className="mb-6 text-muted-foreground">
              At Zenith Financial Advisors, our mission is to provide exceptional tax and financial services
              that empower our clients to achieve their financial goals with confidence. We specialize in
              navigating the complexities of international taxation, ensuring compliance while maximizing
              benefits for individuals and businesses operating across borders.
            </p>
            <p className="text-muted-foreground">
              Founded on the principles of integrity, expertise, and client-focused service, we combine
              traditional financial wisdom with innovative approaches to address the evolving needs of our
              global clientele.
            </p>
          </div>

          <h2 className="text-2xl font-playfair text-primary mb-6">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <CustomImage
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-2xl font-playfair mb-4">Why Choose Zenith Financial Advisors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Global Expertise</h3>
                <p className="text-gray-200 mb-6">
                  Our team brings specialized knowledge in international tax laws, ensuring that you
                  benefit from every available opportunity while maintaining compliance across jurisdictions.
                </p>

                <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
                <p className="text-gray-200">
                  We recognize that every client's situation is unique. That's why we take the time to
                  understand your specific circumstances and develop tailored solutions that address your
                  individual needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
                <p className="text-gray-200 mb-6">
                  In an ever-changing financial landscape, we stay ahead of the curve with innovative
                  approaches to tax planning and financial management, leveraging the latest technology
                  and strategies.
                </p>

                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-gray-200">
                  Our commitment to your success extends beyond the tax season. We provide year-round
                  support and guidance, ensuring that you have the resources you need to make informed
                  financial decisions at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
