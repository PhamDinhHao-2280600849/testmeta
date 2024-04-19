"use client"
import React, { useState, useEffect } from 'react';


const companies = [
  {
    id: 1,
    name: 'NAKAYAMA CO., LTD',
    yearFounded: 1948,
    employees: 57,
    capital: '2000万円',
    address: '627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản',
    industry: 'Khác',
    demand: 'Tìm đối tác Việt Nam',
    imageURL: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af',
    countryLeftURL: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75',
    countryRightURL: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75',
  },
  {
    id: 2,
    name: 'FUJINO SHOJI CO.,LTD',
    yearFounded: 2023,
    employees: 90,
    capital: '25,000千円',
    address: 'Số 11-3, phường Gokojo, thành phố Higashi-omi, tỉnh Shiga, Nhật Bản',
    industry: 'Khác',
    demand: 'Tìm đối tác Việt Nam',
    imageURL: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/7d22b1a6b99de92f97e18484e73ab8bf',
    countryLeftURL: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75',
    countryRightURL: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75',
  },
  
  
];





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
      <div className="Header_wrapper" style={{ marginTop: "110px" }}>
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
          <div className="company__presentative">
            <div className="company__presentative--content">
              
              {companies.map((company, index) => (
                <div className="company__wrapper" key={index}>
                  <div className="row company__container">
                    <div className="company__left">
                      <div className="company__left--image">
                        <img src={company.imageURL} alt="company-image" />
                      </div>
                      <div className="company__left--country">
                        <img id="image-left" src={company.countryLeftURL} alt="country-image-left" />
                        <img id="image-right" src={company.countryRightURL} alt="country-image-right" style={{ width: '20%' }} />
                      </div>
                      <div className="company__left--button">
                        <button className="btn-detail">Chi Tiết</button>
                      </div>
                    </div>
                    <div className="company__right">
                      <div className="company__right--content">
                        <p className="text-truncate"><strong>{company.name}</strong></p>
                        <p className="text-truncate">Năm Thành Lập : {company.yearFounded}</p>
                        <p className="text-truncate">Nhân Viên : {company.employees}</p>
                        <p className="text-truncate">Vốn Doanh Nghiệp : {company.capital}</p>
                        <p className="text-truncate">Địa Chỉ : {company.address}</p>
                        <p className="text-truncate">Ngành Nghề : {company.industry}</p>
                        <p className="text-truncate">Nhu Cầu : {company.demand}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>





        </div>
      </div>
    </main>
  );
}
