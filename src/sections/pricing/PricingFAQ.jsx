import { ChevronRight } from "lucide-react";

const PricingFAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
    {
      id: 2,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
    {
      id: 3,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
    {
      id: 4,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
    {
      id: 5,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
    {
      id: 6,
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequa sent nostrum met.",
    },
  ];

  return (
    <section className="bg-white py-30 px-8 md:px-0">
      <div className="max-w-section mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">
            Pricing FAQs
          </h2>
          <p className="text-xl md:text-2xl text-[#737373] max-w-150 mx-auto font-medium">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex gap-0 md:gap-4">
              <div className="mt-1 shrink-0 hidden md:block">
                <ChevronRight className="w-5 h-5 text-[#23A6F0]" />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-base font-bold text-[#252B42] leading-snug">
                  {faq.question}
                </h4>

                <p className="text-sm font-medium text-[#737373] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 pt-12">
          <p className="text-xl text-[#737373] font-medium">
            Haven’t got your answer?{" "}
            <span className="cursor-pointer transition-colors duration-300 hover:text-[#23A6F0] hover:underline hover:underline-offset-6">
              Contact our support
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
