import React from "react";
import "./home.css";
import Header from "../../component/header/header";
import Herosection from "../../component/heroSection/herosection";
// import Slider from "../../component/slider/slider";
import TopFive from "../../component/topFive/topFive";
import LifeIn from "../../component/lifeIn/lifeIn";
import Access from "../../component/access/access";
import SliderTwo from "../../component/slidertwo/sliderTwo";
import HurryTo from "../../component/hurryto/hurryTo";
import Footer from "../../component/footer/footer";
import SliderCom from "../../component/slider/slider";

function HomePage() {
  return (
    <div className="background-style">
      <Header />
      <Herosection />
      <SliderCom />
      <TopFive />
      <LifeIn />
      <Access />
      <SliderTwo />
      <HurryTo />
     <Footer />
    </div>
  );
}

export default HomePage;
