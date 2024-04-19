"use client"
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      
      document.body.style.overflow = 'hidden';
    } else {
      
      document.body.style.overflow = 'auto';
    }

    // Clean up effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  return (
    <main>
      <div className='translate_container'>
        <div className='translate_left'></div>
        <div className='translate_right'>
          <div className='flag_country'>
            <input id='vi' type='radio'></input>
            <div className='flag_icon'>
              <label className='label_icon'>
                <img src='https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo2.png&w=64&q=75'></img>
              </label>

            </div>
          </div>
          <div className='flag_country'>
            <input id='vi' type='radio'></input>
            <div className='flag_icon'>
              <label className='label_icon'>
                <img src='https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo4.png&w=64&q=75'></img>
              </label>

            </div>
          </div>
          <div className='flag_country'>
            <input id='vi' type='radio'></input>
            <div className='flag_icon'>
              <label className='label_icon'>
                <img src='https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo3.png&w=64&q=75'></img>
              </label>

            </div>
          </div>

        </div>
      </div>
      <div className='Navbar_navbar__container__wu1_1'>
        <div className='Navbar_logo__W8MAp'>
          <a>
            <img src='https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpc.8300dbca.png&w=384&q=75'></img>
          </a>
        </div>
        <div className='Navbar_navbar__menu__hidden__7Wx9I'>
          <div className='Navbar_navbar__left_menu__SR1mX'>
            <a>
              <button>
                Đăng ký tài khoản
                <br></br>
                <span>(MIỄN PHÍ)</span>
              </button>
            </a>
          </div>

        </div>
          <div className='Navbar_menu__mobile__VyJbA'>
            <div className='icon-menu'>
              
              <button className='anticon-menu' onClick={toggleMenu} >
              <i className="bi bi-list"></i>
                
              </button>
            </div>
          </div>
      </div>
      {isMenuOpen && (
        <div className='ant-drawer' >
          <div className='ant-drawer-mask' onClick={toggleMenu} >

          </div>
          <div className='ant-drawer-content-wrapper'>
            <div className='ant-drawer-content'>
              <div className='ant-drawer-wrapper-body'>
                <div className='ant-drawer-header'>
                  <div className='ant-drawer-header-title'>
                    <button className='ant-drawer-close' type='button' aria-label='Close'>
                      <button type="button" className="close" aria-label="Close" onClick={toggleMenu}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div className='ant-drawer-title'>
                        Menu
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ant-drawer-body">
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>
                  <a><span>Trang chu</span></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
