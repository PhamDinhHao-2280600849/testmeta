"use client"
import React from 'react';
;
// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';






export default function Home() {
  
  return (
    <main>
      
          <div className='events_matching_container'>
            <h3 className='matching_title'>CÁC CHUYÊN GIA HỖ TRỢ</h3>
            <h1 className='title'>
              <div className='oth-sub-header-home'>
                <span className='font-index'></span>
                <span className='title-red'>Chuyên gia đại diện</span>
                <span className='font-index'></span>
              </div>
            </h1>
            <Swiper
              
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => {}}
              onSlideChange={() => {}}
            >
              <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='form-content-slider'>
                  <div className='content-slider-user'>
                    <div className='content-slider-user-image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png'></img>
                    </div>
                    <div className='slider__expert--name'>
                      <h3>Tư vấn kinh doanh và CNTT</h3>
                      <span>( Võ Đức Thắng )</span>
                    </div>
                    <div className='content-expert-eye'>
                      <button>Xem hồ sơ</button>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            </Swiper>
          </div>
          
            


        
      
    </main>
  );
}
