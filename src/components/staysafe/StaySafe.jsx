import React from "react";

const StaySafe = () => {
  return (
    <section >
      <div className=" mx-auto flex items-center justify-center flex-col lg:mt-[140px] sm:lg:mt-[100px] mt-[55px]">
        <div className="relative text-center lg:w-2/3 w-full">
        <div className="absolute right-0 top-5 sm:right-[40%] w-[155px] h-[155px] flex-shrink-0 bg-gradient-to-r from-[#EC20FE] to-[#32D4FB] blur-[111px]"></div>

          <h1 className="lg:text-[40px] md:text-[30px] sm:text-[24px] text-[24px] sm:text-4xl text-3xl text-[#F1F1F1] font-[500]">
            Stay Safe & Undetected
          </h1>
          <p className="lg:text-[24px] md:text-[20px] sm:text-[18px] font-[400] text-[16px] lg:pt-[42px] md:pt-[32px] sm:pt-[25px] pt-[22px] text-[#8E8E8E]">
            Our HWID Spoofer is tested and updated daily to ensure full
            compatibility with the latest anti-cheat updates. No bans, no
            detection, just results!
          </p>

          <div className="sm:flex justify-center gap-[33px] lg:pt-[55px] md:pt-[45px] sm:pt-[35px] pt-[18.5px] max-sm:mt-[18px]">

            <button class="inline-flex justify-center gap-[10px] font-[500] items-center text-[#040009] bg-white border-0  focus:outline-none rounded lg:text-[28px] md:text-[25px] sm:text-[22px] text-[20px] lg:px-[37px] md:px-[34px] sm:px-[28px] px-[20px] lg:py-[17px] py-[20px]">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="41"
                    className="max-sm:w-[22px]"
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
                Download Now
            </button>
            <button
              className="inline-flex text-white border-gray-100 border-2 rounded lg:text-[28px] md:text-[23px] sm:text-[20px]
            text-[20px] font-[500] lg:py-[25px] py-[19px] lg:px-[51px]  px-[33px] max-sm:mt-[17px]"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaySafe;
