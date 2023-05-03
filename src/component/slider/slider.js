import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../assets/images/7763252.png";
import nft2 from "../../assets/images/nft2.png";
import nft3 from "../../assets/images/nft3.png";
import nft4 from "../../assets/images/nft4.png";
import nft5 from "../../assets/images/nft5.png";
import nft6 from "../../assets/images/nft6.png";

// Import Swiper styles
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-11 slider-bg">
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <div className="col-md-6">
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={Logo} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft2} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft3} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom"> 
                    <img src={nft4} className="img-fluid"  alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft5} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft6} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft2} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft3} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft4} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft5} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft6} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={Logo} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft2} className="img-fluid" alt=""  />
                  </div>
                </SwiperSlide>
              </div>
              {/* <SwiperSlide>Slide 8</SwiperSlide>
              {/* <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
