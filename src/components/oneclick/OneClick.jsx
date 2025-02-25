import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Clickone1 from "../../assits/clickone1.png";

const steps = [
  {
    id: "01",
    title: "Login & Run the Spoofer",
    description: "No manual tweaking required",
    image: [Clickone1], // Replace with actual image
  },
  {
    id: "02",
    title: "Select Spoofing Options",
    description: "Choose settings that fit your needs",
    image: [Clickone1], // Replace with actual image
  },
  {
    id: "03",
    title: "Start Spoofing",
    description: "One-click to get started",
    image: [Clickone1], // Replace with actual image
  },
];

const OneClick = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + steps.length) % steps.length
    );
  };

  return (
    <section className="max-sm:relative mx-auto text-white  lg:py-[140px] md:py-[120px] sm:py-[80px] py-[55px] max-sm:mb-[55px]">
      <h2 className="text-center text-2xl lg:text-[40px] md:text-[30px] sm:text-[30px] text-[24px] lg:mb-[100px] md:mb-[80px] sm:mb-[50px] mb-[42px] font-[500]">
        One-Click Spoofing – How It Works?
      </h2>

      <div className="sm:relative flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 relative">
        {/* lg:ml-[-80px] */}
        <div class="w-[204px] h-[204px] sm:w-[268px] sm:h-[268px] flex-shrink-0 bg-gradient-to-r from-[#EC20FE] to-[#32D4FB] bg-[#1E023F] blur-[84.5px] absolute">
        </div>
        
        {/* Image */}
        <div className="w-[60%] ">
          <img
            src={steps[currentIndex].image}
            alt="Step Illustration"
            className="w-[450.99px] mx-auto rounded-lg relative z-[99999]"
          />
        </div>

        {/* Text Content */}
        <div className="flex max-md:justify-center items-center gap-[19px] w-full md:w-1/2 text-center md:text-left">
          <h3 className="lg:text-[96px] md:text-[76px] font-[500] sm:text-[48px] text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            {steps[currentIndex].id}
          </h3>

          <div>
          <h4 className="lg:text-[28px] md:text-[23px] sm:text-[20px] text-[20px] font-[500] mt-2">
            {steps[currentIndex].title}
          </h4>
          <p className="text-[#8E8E8E] lg:text-[24px] md:text-[19px] text-[16px] font-[400] sm:mt-[18px] mt-[10px]">
            {steps[currentIndex].description}
          </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 right-0 flex md:space-x-6 space-x-3">
          {/* <button
            onClick={prevStep}
            className="p-2 bg-[#F1F1F1] text-black rounded-full hover:bg-gray-500"
          >
            <ChevronLeft size={24} />
          </button> */}
          <button
            onClick={nextStep}
            className="md:p-4 p-2 bg-[#F1F1F1] text-black rounded-full hover:bg-gray-500"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OneClick;
