import React from "react";
import "./home.css";
import Header from "../../component/header/header";
import Herosection from "../../component/heroSection/herosection";
import Slider from "../../component/slider/slider";
import TopFive from "../../component/topFive/topFive";
import LifeIn from "../../component/lifeIn/lifeIn";
import Access from "../../component/access/access";
import SliderTwo from "../../component/slidertwo/sliderTwo";
import HurryTo from "../../component/hurryto/hurryTo";

function HomePage() {
  return (
    <div className="background-style">
      <Header />
      <Herosection />
      {/* <Slider /> */}
      <TopFive />
      <LifeIn />
      <Access />
      <SliderTwo />
      <HurryTo />
    </div>
  );
}

export default HomePage;
