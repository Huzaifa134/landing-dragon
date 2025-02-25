import { useState } from "react";

const faqs = [
  { question: "Will this work on my PC?", answer: "Yes, our software is designed to be compatible with most modern PCs." },
  { question: "Is this detectable?", answer: "No! We continuously update our spoofer to remain undetected by all major anti-cheats." },
  { question: "How often should I spoof?", answer: "It is recommended to spoof before each gaming session to ensure maximum security." },
  { question: "What if I get banned again?", answer: "If you get banned again, you can use our spoofer to reset your hardware ID and continue playing." }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto lg:pt-[140px] sm:pt-[80px] pt-[60px] text-[#F1F1F1] md:max-w-4xl lg:max-w-6xl">
      <h2 className="text-center lg:text-[40px] md:text-[32px] sm:text-[25px] text-[20px] font-semibold mb-6">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-2 lg:mt-[75px] sm:mt-[55px] mt-[35px]">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-[#232323] rounded-[8px] overflow-hidden bg-[rgba(7,0,16,0.33)] backdrop-blur-[2px]">
            <button
              className="lg:text-[28px] sm:text-[22px] text-[20px] font-[500] w-full text-left lg:px-[45px] md:px-[38px] sm:px-[30px] px-[25px] lg:py-[32px] md:py-[25px] sm:py-[17px] py-[15px]"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="lg:text-[24px] sm:text-[18px] text-[16px] font-[400] lg:px-[45px] md:px-[38px] sm:px-[30px] px-[25px] lg:pb-[32px] md:pb-[25px] sm:pb-[17px] pb-[15px] text-[#8E8E8E]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
