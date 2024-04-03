import React, {useState, useEffect} from "react";
import styles from '../../styles/MyProfile/Photos.module.css';
import imgSrc1 from '../../assets/milan.webp';
import imgSrc2 from '../../assets/AlbanPhoto.jpeg';
import PhotosCarousel from "./PhotosCarousel";

const Photos =(props)=>{
    const [showCarousel,setShowCarousel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Effect to handle scrolling when showCarousel changes
    useEffect(() => {
        if (showCarousel) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
    }, [showCarousel]);

    const hideCarouselHandler =()=>{
        setShowCarousel(false);
    }
    const showCarouselHandler = (index)=>{
        setSelectedImageIndex(index);
        setShowCarousel(true);
    }
    const data = props.data;
    return(
            
            <div className={styles.photos}>
            {data.map((_, index) => (
                <img onClick={() =>showCarouselHandler(index)} key={index} src={data[index]} alt="Album of photos" />
            ))}
            {showCarousel && <PhotosCarousel hideCarouselHandler={hideCarouselHandler} data={data} selectedImageIndex={selectedImageIndex}/>}
            </div>

    );
}

export default Photos;