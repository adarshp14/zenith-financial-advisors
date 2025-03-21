import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair text-primary mb-8">Our Services</h1>
          <p className="mb-6 text-muted-foreground">
            At Zenith Financial Advisors, we offer a comprehensive range of tax and financial services
            to meet your specific needs. Our expert team is ready to assist you with all your financial requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-light-gray p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-playfair text-primary mb-4">Individual Tax Services</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>U.S. Federal Tax Return Preparation</li>
                <li>Foreign Earned Income Exclusion (Form 2555)</li>
                <li>Foreign Tax Credit (Form 1116)</li>
                <li>Financial Account Reporting (FBAR, Form 8938)</li>
                <li>State Tax Returns</li>
              </ul>
            </div>

            <div className="bg-light-gray p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-playfair text-primary mb-4">Corporate Tax Services</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Corporate Tax Planning and Strategy</li>
                <li>Business Tax Return Preparation</li>
                <li>Payroll Tax Services</li>
                <li>Sales Tax Compliance</li>
                <li>International Tax Planning</li>
              </ul>
            </div>

            <div className="bg-light-gray p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-playfair text-primary mb-4">Accounting Services</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Bookkeeping and Financial Record Management</li>
                <li>Financial Statement Preparation</li>
                <li>Cash Flow Analysis</li>
                <li>Financial Forecasting</li>
                <li>Business Performance Review</li>
              </ul>
            </div>

            <div className="bg-light-gray p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-playfair text-primary mb-4">Specialized Services</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Streamlined Filing Procedures</li>
                <li>Expatriate Tax Services</li>
                <li>Dual Citizenship Tax Planning</li>
                <li>Foreign Business Ownership Compliance</li>
                <li>Tax Deadline Management</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
