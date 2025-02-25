import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Choose from "../../components/choose/Choose";
import PriceCard from "../../components/pricecard/PriceCard";
import Features from "../../components/features/Features";
import StaySafe from "../../components/staysafe/StaySafe";
import FAQs from "../../components/faqs/FAQs";
import OneClick from "../../components/oneclick/OneClick";

const Home = () => {
  
  return (
    <Layout>
      <HeroSection/>
      <Features/>
      <Choose/>
      <OneClick/>
      <PriceCard/>
      <StaySafe/>
      <FAQs/>
    </Layout>
  );
};

export default Home;
