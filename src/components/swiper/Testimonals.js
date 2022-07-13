import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  userImg  from '../../images/user-4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Testimonals = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img alt=""  src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          <div className="main_testimonals">
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                </p>

                <div className="description">
                    <div className="desc_img">
                        <img src={userImg}/>
                    </div>

                    <div className="desc_details">
                    <h3>John</h3>
                    <h4>software Engineer</h4>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
          <div className="main_testimonals">
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                </p>

                <div className="description">
                    <div className="desc_img">
                        <img src={userImg}/>
                    </div>

                    <div className="desc_details">
                    <h3>John</h3>
                    <h4>software Engineer</h4>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
          <div className="main_testimonals">
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                </p>

                <div className="description">
                    <div className="desc_img">
                        <img src={userImg}/>
                    </div>

                    <div className="desc_details">
                    <h3>John</h3>
                    <h4>software Engineer</h4>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
          <div className="main_testimonals">
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                </p>

                <div className="description">
                    <div className="desc_img">
                        <img src={userImg}/>
                    </div>

                    <div className="desc_details">
                    <h3>John</h3>
                    <h4>software Engineer</h4>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
          <div className="main_testimonals">
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                </p>

                <div className="description">
                    <div className="desc_img">
                        <img src={userImg}/>
                    </div>

                    <div className="desc_details">
                    <h3>John</h3>
                    <h4>software Engineer</h4>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
