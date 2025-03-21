import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServicesPreview from "@/components/ServicesPreview";
import ClientCategories from "@/components/ClientCategories";
import BlogPreview from "@/components/BlogPreview";
import TaxDeadlines from "@/components/TaxDeadlines";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <ScrollAnimation animation="slide-in-left" className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-playfair mb-6 leading-tight">
                  Modern Tax & Financial Services for Expats & Global Citizens
                </h1>
                <p className="text-lg mb-8 text-white/90 max-w-xl">
                  Specializing in international taxation, we help expats, business owners, and global professionals navigate complex financial landscapes with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:shadow-lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg transition-all duration-300">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-in-right" className="md:w-1/2">
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://ext.same-assets.com/2906338986/1569833860.jpeg"
                      alt="Financial advisor working with client"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-secondary rounded-lg px-6 py-4 shadow-lg">
                    <p className="font-playfair text-xl">20+ Years Experience</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <ClientCategories />
        <BlogPreview />
        <TaxDeadlines />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
