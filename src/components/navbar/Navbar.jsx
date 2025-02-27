import React, { useState } from "react";
import { X } from "lucide-react"; // Close icon

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
    <header className=" text-white py-[15px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="text-white" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="188"
              height="29"
              className="md:w-[160px] sm:w-[120px] w-[80px]"
              viewBox="0 0 188 29"
              fill="none"
            >
              <path
                d="M2 26.5H52"
                stroke="#F1F1F1"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M2 14.5H52"
                stroke="#F1F1F1"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M2 2.5H52"
                stroke="#F1F1F1"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        {/* LOGO */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="87"
            className="md:w-[46px] sm:md:w-[36.69px] w-[36.69px]"
            viewBox="0 0 56 87"
            fill="none"
          >
            <path
              d="M56 30.1884L55.6743 41.3062L49.5865 39.677L49.8111 33.7921C35.0769 27.5935 20.5627 27.3913 6.28899 33.7921C6.30573 38.5682 6.72963 43.334 7.55597 48.0364L39.0373 56.5662C36.1664 62.3535 32.5474 67.3092 28.0545 71.2901V60.0791L2.38921 53.1557C0.387649 45.2644 -0.463744 37.5275 0.248371 30.0043C2.22845 28.8607 4.26818 27.8261 6.35863 26.905V9.62274L30.0202 0L49.3753 10.1022V20.1225H42.5237V14.3239L29.672 7.61639L13.2147 14.3103V24.4056C26.855 20.4157 41.286 22.0698 56 30.1884ZM27.9984 35.0849C22.5284 35.2599 17.3391 36.1165 12.5812 38.0388L13.053 42.9308L47.3535 52.3059C44.1412 63.1465 37.4176 72.0353 28.0051 79.4268C21.7488 74.3075 16.481 68.7906 12.9182 62.5921L4.97035 60.4494C9.40702 70.6175 17.1774 79.4291 27.9984 87C42.0857 77.0478 52.1002 64.6621 54.7308 47.8569L27.9984 40.5882V35.0849Z"
              fill="url(#paint0_linear_63_68)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_63_68"
                x1="-0.00322781"
                y1="43.492"
                x2="56"
                y2="43.492"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC20FE" />
                <stop offset="1" stop-color="#32D4FB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* DISCORD BTN */}
        <button className="flex justify-center items-center gap-[14px] sm:bg-white text-black px-4 py-2 rounded font-semibold lg:text-[20px] md:lg:text-[17px] sm:lg:text-[15px]">
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="30"
              viewBox="0 0 38 30"
              fill="none"
            >
              <path
                d="M12.6009 0.680145C10.8169 1.03694 8.40115 1.7654 7.06316 2.34519C6.94423 2.39722 6.72123 2.48642 6.58 2.54589C5.90358 2.81349 5.72518 2.94728 5.30148 3.57911C5.07105 3.92847 4.82576 4.30757 4.75886 4.43393C4.49869 4.89479 4.37233 5.11779 4.1196 5.54892C3.51007 6.58957 2.55118 8.62628 1.98626 10.0832C1.56256 11.161 0.975337 13.1085 0.75234 14.1343C0.68544 14.4391 0.596242 14.8256 0.559075 14.9891C0.447577 15.4426 0.20228 16.9738 0.0982143 17.8881C-0.0132843 18.8098 -0.035584 23.634 0.0610481 24.3327C0.113081 24.6969 0.15768 24.7787 0.358378 24.9051C0.492176 24.9868 0.863838 25.2396 1.1909 25.47C1.51796 25.693 1.88963 25.9383 2.00856 26.0201C2.43225 26.2802 3.49521 26.9121 3.90403 27.1425C4.46153 27.4547 6.28267 28.3318 6.37187 28.3318C6.4016 28.3318 6.63203 28.4284 6.8922 28.5474C7.40509 28.7852 7.65782 28.8819 8.78767 29.261C9.20394 29.4022 9.5979 29.5211 9.6648 29.5211C9.83576 29.5211 9.89523 29.4468 10.5568 28.4433C11.2555 27.3729 11.813 26.3546 11.761 26.2282C11.7387 26.1762 11.4934 26.0349 11.2183 25.916C10.7129 25.7079 9.8209 25.2842 9.04784 24.8828C8.65388 24.6821 8.65388 24.6746 8.78024 24.5334C8.85457 24.4517 9.02554 24.3179 9.15934 24.2361L9.40463 24.08L10.2074 24.4145C12.1252 25.2247 14.5187 25.864 16.377 26.0572C16.5851 26.0795 16.9196 26.1167 17.1203 26.139C18.2576 26.2579 20.4207 26.2208 21.6323 26.0647C23.8474 25.7748 25.676 25.2916 27.7573 24.4368C28.679 24.0577 28.6493 24.0577 29.1102 24.4517C29.3109 24.6226 29.2811 24.7044 28.9689 24.8679C27.8911 25.4105 27.3262 25.6781 26.8207 25.8863C26.5011 26.0201 26.2186 26.1613 26.1889 26.2059C26.1592 26.2505 26.2112 26.4215 26.3078 26.585C26.4045 26.7485 26.568 27.031 26.6646 27.2168C26.9397 27.7223 27.906 29.2387 28.0769 29.4171L28.2182 29.5806L28.902 29.3576C31.4368 28.5548 34.306 27.1499 36.6475 25.5741C37.9483 24.7044 37.874 24.8084 37.9632 23.6786C38.03 22.7643 38.0003 18.6166 37.9186 18.2226C37.9037 18.1185 37.8442 17.7023 37.7996 17.2934C37.755 16.8846 37.6881 16.3792 37.651 16.1785C37.6138 15.9703 37.5618 15.6879 37.5395 15.5466C37.2198 13.6214 36.2981 10.5961 35.4581 8.73035C35.3466 8.49248 35.1534 8.06135 35.027 7.77889C34.9007 7.48899 34.7223 7.12477 34.6405 6.96124C34.0607 5.87598 33.7411 5.30362 33.6221 5.12522C33.5478 5.02116 33.4883 4.90966 33.4883 4.88736C33.4883 4.83533 32.9531 3.9805 32.8342 3.83927C32.8045 3.79467 32.6632 3.57168 32.522 3.34125C32.3065 2.99932 32.195 2.88782 31.8902 2.76145C30.3664 2.0999 29.1325 1.6539 27.6532 1.23021C26.5457 0.903143 24.4569 0.457148 24.3603 0.524048C24.2563 0.583513 23.3791 2.30803 23.3791 2.44182C23.3791 2.53102 23.3197 2.54589 23.1338 2.50872C21.2309 2.15193 16.5851 2.15193 14.8532 2.50872C14.712 2.53102 14.6376 2.41952 14.1916 1.53497C13.9166 0.977476 13.6713 0.516615 13.649 0.501747C13.6267 0.486881 13.151 0.568647 12.6009 0.680145ZM13.2402 12.7294C15.5965 13.1606 16.7933 16.1264 15.5594 18.4605C14.8681 19.7613 13.3368 20.5195 12.0657 20.1924C10.4156 19.7687 9.33773 18.3192 9.32287 16.5055C9.31543 15.8291 9.3749 15.502 9.59046 14.9445C10.1182 13.6066 11.2778 12.7369 12.6455 12.6551C12.7273 12.6551 12.9949 12.6848 13.2402 12.7294ZM26.3153 12.8409C27.3187 13.1829 28.1736 14.0971 28.5527 15.2493C28.7311 15.7771 28.7311 16.9589 28.5601 17.5982C28.3371 18.4382 27.683 19.3524 26.9843 19.7836C26.5308 20.0735 26.3078 20.1552 25.7875 20.2221C24.7543 20.3708 23.8697 20.0586 23.0892 19.2781C22.2641 18.4456 21.9296 17.5387 21.9891 16.2974C22.0263 15.5466 22.0263 15.5392 22.1824 15.0709C22.45 14.283 23.2156 13.3687 23.8995 13.0193C24.6205 12.6477 25.5496 12.5808 26.3153 12.8409Z"
                fill="#5865F2"
              />
            </svg>
          </span>
          <span className="max-sm:hidden">
          Discord
          </span>
        </button>
      </div>
    </header>

    {/* Sidebar Menu */}
    <div
    className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
      isOpen ? "translate-x-0" : "-translate-x-full z-50"
    } transition-transform duration-300 ease-in-out`}
  >
    {/* Close Button */}
    <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
      <X size={24} />
    </button>

    {/* Menu Items */}
    <nav className="mt-16 flex flex-col space-y-6 pl-6">
      <a href="#" className="text-lg">Features & Tools</a>
      <a href="#" className="text-lg">Why Choose Us</a>
      <a href="#" className="text-lg">How It Works</a>
      <a href="#" className="text-lg">Plans & Pricing</a>
      <a href="#" className="text-lg">FAQs</a>
    </nav>
  </div>

  </>
  );
}
