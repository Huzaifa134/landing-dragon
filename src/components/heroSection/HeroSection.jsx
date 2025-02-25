import React from "react";
import Herolaptop from "../../assits/Herolaptop.png";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="lg:text-[54px] md:text-[40px] sm:text-[38px] text-[26px] font-[500] text-[#F1F1F1]">
            <span className="gradient-text"> Bypass Any HWID Ban </span> &
              Stay Undetected
            </h1>
            <p className="lg:text-[28px] md:text-[18px] sm:text-[16px] text-[16px] lg:pt-[42px] md:pt-[38px] sm:pt-[35px] pt-[22px]">
            Reset your digital identity with our one-click HWID spoofer—fully undetectable, fast, and compatible with all major anti-cheat systems.
            </p>
            <div className="lg:pt-[55px] md:pt-[48px] sm:pt-[35px] pt-[33px]">
              <button className="flex justify-center items-center sm:gap-4 gap-2 text-black bg-white py-2 sm:px-6 px-4 rounded fon-500 lg:text-[23px] md:text-[21px] sm:text-[17px] text-[15px] font-semibold">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="41"
                    viewBox="0 0 26 41"
                    fill="none"
                  >
                    <path
                      d="M26 14.2267L25.8488 19.4661L23.0223 18.6984L23.1266 15.925C16.2857 13.0038 9.54699 12.9085 2.91989 15.925C2.92766 18.1758 3.12447 20.4218 3.50813 22.6379L18.1245 26.6577C16.7915 29.385 15.1113 31.7204 13.0253 33.5965V28.3131L1.10928 25.0504C0.17998 21.3315 -0.21531 17.6854 0.115315 14.14C1.03464 13.601 1.98166 13.1134 2.95222 12.6794V4.53485L13.9379 0L22.9243 4.76079V9.48304H19.7432V6.75035L13.7763 3.58933L6.1354 6.74392V11.5015C12.4684 9.62117 19.1685 10.4007 26 14.2267ZM12.9993 16.5343C10.4596 16.6167 8.05031 17.0204 5.84128 17.9263L6.0603 20.2318L21.9856 24.6499C20.4941 29.7587 17.3725 33.9477 13.0024 37.431C10.0977 35.0185 7.65189 32.4186 5.99772 29.4974L2.30766 28.4877C4.36755 33.2795 7.97521 37.4321 12.9993 41C19.5398 36.3099 24.1894 30.4729 25.4107 22.5533L12.9993 19.1278V16.5343Z"
                      fill="url(#paint0_linear_51_711)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_51_711"
                        x1="-0.00149863"
                        y1="20.4963"
                        x2="26"
                        y2="20.4963"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#EC20FE" />
                        <stop offset="1" stop-color="#32D4FB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                Downloadd now
              </button>
            </div>
            <div className="rounded-[268px] bg-gradient-to-r from-[#EC20FE] to-[#32D4FB] blur-[222px] absolute h-[268px] w-[268px] left-[0px] top-[440px]"></div>
          </div>
          <div className="lg:w-[592px] md:w-[492px] sm:w-[359.805px] relative">
          <div className="bg-[#1E023F] rounded-[268px] blur-[111px] absolute sm:h-[268px] w-[100px] h-[100px] sm:w-[268px] sm:top-[-188px] sm:right-[320px]"></div>
          <div className="rounded-[268px] bg-gradient-to-r from-[#EC20FE] to-[#32D4FB] blur-[100px] absolute w-[100px] h-[100px] sm:h-[268px] sm:w-[268px]  sm:right-[73px]"></div>
          <div className="rounded-[268px] bg-gradient-to-r from-[#EC20FE] to-[#32D4FB] blur-[100px] absolute w-[100px] h-[100px] sm:h-[268px] sm:w-[268px]  sm:right-[-150px]"></div>
            <img
              className="object-cover object-center rounded relative z-[99999]"
              alt="hero"
              src={Herolaptop}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
