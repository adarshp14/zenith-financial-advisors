import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Experience</h3>
            <p className="text-sm text-gray-300 mb-4">
              Experience modern financial services with sophistication and trust.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/zenith-financial-advisors-11835b327/" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Contact</h3>
            <p className="text-sm text-gray-300">
              contact@zenithfinancialadvisors.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Connect</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-full md:w-auto whitespace-nowrap">
                Subscribe for more information
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-xs max-w-xl">
              <strong>Disclaimer:</strong> Emails from Zenith Financial Advisors are for informational and promotional
              purposes only, keeping clients updated on tax law changes—no sensitive information is requested.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
