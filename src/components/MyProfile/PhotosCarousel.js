import React, { useState, useEffect } from "react";
import styles from "../../styles/MyProfile/PhotosCarousel.module.css";
import { RxCross2 } from "react-icons/rx";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Comments from "./Comments";

const PhotosCarousel = ({
  hideCarouselHandler,
  data,
  selectedImageIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  useEffect(() => {
    if (selectedImageIndex === 0) {
      setShowRightBtn(true);
    } else {
      setShowLeftBtn(true);
    }

    if (selectedImageIndex === data.length - 1) {
      setShowLeftBtn(true);
    } else {
      setShowRightBtn(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        leftIndexHandler(event);
      } else if (event.key === "ArrowRight") {
        rightIndexHandler(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const leftIndexHandler = (event) => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex - 1 <= 0) {
      setShowLeftBtn(false);
    }
    if (currentIndex - 1 < data.length - 1) {
      setShowRightBtn(true);
    }
    handlePhotoClick(event);
  };

  const rightIndexHandler = (event) => {
    if (currentIndex + 1 < data.length ) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex + 1 > 0) {
      setShowLeftBtn(true);
    }
    if (currentIndex + 1 >= data.length - 1) {
      setShowRightBtn(false);
    }
    handlePhotoClick(event);
  };

  const handlePhotoClick = (event) => {
    if (event.key && !(event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      return;
    }
    event.stopPropagation();
  };
  
  

  return (
    <>
      <div className={styles.background} onClick={hideCarouselHandler}>
        <RxCross2 className={styles.exit} />
        {showLeftBtn && (
          <FaCircleChevronLeft
            className={styles.btnLeft}
            onClick={leftIndexHandler}
          />
        )}
        <div onClick={handlePhotoClick} className={styles.photo}>
          <div className={styles.image}>
            <img src={data[currentIndex]} alt="Selected Image" />
          </div>
          <Comments/>
        </div>
        {showRightBtn && (
          <FaCircleChevronRight
            className={styles.btnRight}
            onClick={rightIndexHandler}
          />
        )}
      </div>
    </>
  );
};

export default PhotosCarousel;
