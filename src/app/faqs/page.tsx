import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function FAQsPage() {
  const faqs = [
    {
      question: "Do I need to file US taxes if I live abroad?",
      answer: "Yes, U.S. citizens and permanent residents (green card holders) are required to file U.S. tax returns regardless of where they live. The U.S. taxes global income, but there are provisions like the Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credit (FTC) that can help reduce or eliminate double taxation.",
    },
    {
      question: "What is FBAR and do I need to file one?",
      answer: "FBAR (Foreign Bank Account Report) is a mandatory filing for U.S. persons with foreign financial accounts totaling more than $10,000 at any point during the calendar year. This includes bank accounts, investment accounts, and certain other financial accounts held outside the United States. Failure to file can result in significant penalties.",
    },
    {
      question: "How can I claim the Foreign Earned Income Exclusion?",
      answer: "To claim the Foreign Earned Income Exclusion (FEIE), you must file Form 2555 with your tax return. You must qualify as either a bona fide resident of a foreign country for an entire tax year or be physically present in a foreign country for at least 330 days in a 12-month period. The FEIE allows you to exclude up to $120,000 (for 2023) of foreign earned income from U.S. taxation.",
    },
    {
      question: "What is the difference between the Foreign Tax Credit and the Foreign Earned Income Exclusion?",
      answer: "The Foreign Tax Credit (FTC) provides a dollar-for-dollar credit against your U.S. tax liability for income taxes paid to a foreign government, while the Foreign Earned Income Exclusion (FEIE) allows you to exclude a certain amount of your foreign earned income from U.S. taxation. The FTC is generally more beneficial for those in high-tax countries, while the FEIE may be better for those in low-tax or no-tax countries.",
    },
    {
      question: "What are the tax implications of owning a foreign corporation?",
      answer: "Owning a foreign corporation may trigger additional filing requirements such as Form 5471 (Information Return of U.S. Persons With Respect to Certain Foreign Corporations). Depending on the structure, you may be subject to Controlled Foreign Corporation (CFC) rules, GILTI tax, or Passive Foreign Investment Company (PFIC) regulations. These complex provisions can significantly impact your tax liability and require specialized planning.",
    },
    {
      question: "How does the IRS Streamlined Filing Procedure work?",
      answer: "The Streamlined Filing Procedure is an IRS program designed to help taxpayers who have non-willfully failed to report foreign financial assets and pay taxes on income from those assets. Under this program, you generally need to file the last three years of tax returns and six years of FBARs. Penalties are typically reduced compared to other compliance options.",
    },
    {
      question: "What are the deadlines for US tax filing when living abroad?",
      answer: "U.S. citizens living abroad automatically receive a 2-month extension, making their tax return due on June 15 instead of April 15. However, any tax owed is still due by April 15, and interest will accrue on any unpaid tax after that date. You can request an additional extension until October 15 by filing Form 4868.",
    },
    {
      question: "How do state taxes work if I live outside the US?",
      answer: "State tax obligations depend on which state you lived in before moving abroad and whether you maintain ties there (like property, driver's license, voter registration, etc.). Some states, like California and Virginia, are particularly aggressive in claiming residents who move abroad. Others, like Texas and Florida (which have no state income tax), or states like Pennsylvania and Arizona, which have specific provisions for non-residents, may be more favorable.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair text-primary mb-8">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Find answers to common questions about international taxation, filing requirements, and our services.
            If you don't see your question answered here, please contact us for personalized assistance.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
