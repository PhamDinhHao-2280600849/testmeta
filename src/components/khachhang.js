"use client";
import React, { useEffect, useState } from "react";
import styles from "./SlidePartner.module.css"; // Import CSS modules styles

const SlidePartner = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [images]); 

  useEffect(() => {
    const extendedImages = [...images, ...images];
    setVisibleImages(extendedImages);
  }, [images]); 

  return (
    <div className={styles.slide_partner}>
      <div
        className={styles.slide_partner_wrapper}
        style={{
          width: `${(visibleImages.length / 5) * 100}%`,
          transform: `translateX(-${slideIndex * (100 / 5)}%)`,
          transition: "transform 5s linear",
        }}
      >
        {visibleImages.map((image, index) => (
          <div className={styles.slide_partner_item} key={index}>
            <img src={image.src} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePartner;