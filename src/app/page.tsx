"use client"
import React, { useState, useEffect } from 'react';
// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';






export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);


  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Đã chọn quốc gia:', selectedCountry);
  };

  return (
    <main>
      <div className="Header_wrapper">
        <img src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75" alt="logo"></img>
      </div>
      <div className="landing__content">
        <div className="Home_container">
          <form onSubmit={handleSubmit}>
            <div className="container-content-search">
              <div className="container-content-input">
                <input type="text" placeholder="Tìm kiếm doanh nghiệp"></input>
              </div>
              <div className="container-content-search__country">
                <div className="ant-radio-group">
                  <label className="ant-radio-wrapper">
                    <input type="radio" value="vi" checked={selectedCountry === "vi"} onChange={handleCountryChange}></input>
                    <span className="ant-radio-inner"></span>
                    <span>
                      <img src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.fad93aaf.png&w=256&q=75" alt="country1"></img>
                    </span>
                  </label>
                  <label className="ant-radio-wrapper">
                    <input type="radio" value="ja" checked={selectedCountry === "ja"} onChange={handleCountryChange}></input>
                    <span className="ant-radio-inner"></span>
                    <span>
                      <img src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo4.3437b7bc.png&w=256&q=75" alt="country2"></img>
                    </span>
                  </label>
                </div>
              </div>
              <div className="container-content-search__country-button">
                <button type="submit" className="btn-search">Tìm kiếm</button>
              </div>
            </div>
          </form>
          <h3 className='matching_title'> Những Đối Tác Nổi Bật</h3>
          <div className='title'>
            <div className='oth-sub-header-home'>
              <span className='font-index'></span>
              <div>CÔNG TY TIÊU BIỂU PHÍA </div>
              <span className='titile-red'>Nhật Bản</span>
              <span className='font-index'></span>

            </div>

          </div>
          <div className='company__presentative'>
            <div className='company__presentative--content'>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='company__wrapper'>
                <div className='row company__container'>
                  <div className='company__left'>
                    <div className='company__left--image'>
                      <img src='https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af'></img>
                    </div>
                    <div className='company__left--country'>
                      <img id='image-left' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75'></img>
                      <img id='image-right' src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75' style={{ width: '20%' }} ></img>
                    </div>
                    <div className='company__left--button'>
                      <button className='btn-detail'>Chi Tiết</button>
                    </div>
                  </div>
                  <div className='company__right'>
                    <div className='company__right--content'>
                      <p className='text-truncate'><strong>NAKAYAMA CO., LTD</strong></p>
                      <p className='text-truncate'>Năm Thành Lập : 1948</p>
                      <p className='text-truncate'>Nhân Viên : 57</p>
                      <p className='text-truncate'>Vốn Doanh Nghiệp : 2000万円</p>
                      <p className='text-truncate'>Địa Chỉ : 627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.</p>
                      <p className='text-truncate'>Ngành Nghề : Khác</p>
                      <p className='text-truncate'>Nhu Cầu : Tìm đối tác Việt Nam</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='events_matching_container'>
            <h3 className='matching_title'></h3>
            <h1 className='title'></h1>
            <Swiper
              // install Swiper modules
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
          <div className='footer' style={{height:'500px'}}></div>
            


        </div>
      </div>
    </main>
  );
}
