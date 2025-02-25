import React from 'react'

const PriceCard = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="mx-auto">
    <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Choose Your Plan – Affordable & Reliable</h1>
      
    </div>
    <div className="flex flex-wrap justify-center gap-[17px] lg:pt-[75px] md:pt-[50px] sm:pt-[50px] pt-[42px]">
      
      
      <div className="lg:w-[382px] md:w-[40%] sm:w-[70%] w-full">
        <div className="lg:py-[45px] sm:py-[35px] py-[33px] px-[25px] rounded-lg border-2 border-[#232323] flex flex-col relative overflow-hidden">
          <h2 className="lg:text-[32px] md:text-[28px] smLtext-[24px] text-[24px] text-[#F1F1F1] font-[500]">Daily Pass</h2>
          <p className='lg:text-[24px] md:text-[20px] sm:text-[17px] text-[16px] text-[#8E8E8E] lg:pt-[22px] sm:pt-[18px] pt-[17px] font-[400]'>Perfect for quick unbans!</p>
          <p className='lg:text-[40px] md:text-[40px] text-[40px] gradient-text font-bold lg:py-[30px] sm:py-[22px] py-[22px]'>10$</p>
          
          <button className=" text-[#040009] lg:text-[20px] text-[15px] bg-[#F1F1F1] font-bold lg:py-[16px] sm:py-[13px] py-[13px] border-0 w-full hover:bg-gray-500 rounded">Get Spoofer Now
            
          </button>
          
        </div>
      </div>
      <div className="lg:w-[382px] md:w-[40%] sm:w-[70%] w-full">
        <div className="lg:py-[45px] sm:py-[35px] py-[33px] px-[25px] rounded-lg border-2 border-[#232323] flex flex-col relative overflow-hidden">
          <h2 className="lg:text-[32px] md:text-[28px] smLtext-[24px] text-[24px] text-[#F1F1F1] font-[500]">Daily Pass</h2>
          <p className='lg:text-[24px] md:text-[20px] sm:text-[17px] text-[16px] text-[#8E8E8E] lg:pt-[22px] sm:pt-[18px] pt-[17px] font-[400]'>Perfect for quick unbans!</p>
          <p className='lg:text-[40px] md:text-[40px] text-[40px] gradient-text font-bold lg:py-[30px] sm:py-[22px] py-[22px]'>10$</p>
          
          <button className=" text-[#040009] lg:text-[20px] text-[15px] bg-[#F1F1F1] font-bold lg:py-[16px] sm:py-[13px] py-[13px] border-0 w-full hover:bg-gray-500 rounded">Get Spoofer Now
            
          </button>
          
        </div>
      </div>
      <div className="lg:w-[382px] md:w-[40%] sm:w-[70%] w-full">
      <div className="relative flex flex-col overflow-hidden bg-[#040009] rounded-lg p-[2px]">
        {/* Neon Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 blur-md opacity-60"></div>
    
        {/* Content Box with Inner Border */}
        <div className="relative bg-[#040009] rounded-lg lg:py-[45px] sm:py-[35px] py-[33px] px-[25px]">
          <h2 className="lg:text-[32px] md:text-[28px] sm:text-[24px] text-[24px] text-[#F1F1F1] font-[500]">
            Daily Pass
          </h2>
          <p className="lg:text-[24px] md:text-[20px] sm:text-[17px] text-[16px] text-[#8E8E8E] lg:pt-[22px] sm:pt-[18px] pt-[17px] font-[400]">
            Perfect for quick unbans!
          </p>
          <p className="lg:text-[40px] md:text-[40px] text-[40px] gradient-text font-bold lg:py-[30px] sm:py-[22px] py-[22px]">
            10$
          </p>
    
          <button className="text-[#040009] lg:text-[20px] text-[15px] gradient-bg font-bold lg:py-[16px] sm:py-[13px] py-[13px] border-0 w-full hover:bg-gray-500 rounded">
            Get Spoofer Now
          </button>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</section>
  )
}

export default PriceCard