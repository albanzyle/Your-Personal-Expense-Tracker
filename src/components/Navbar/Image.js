import React,{useState, useEffect} from 'react';
import styles from '../../styles/Navbar/Image.module.css'
import AllCards from './AllCards';
import imageSrc from "../../assets/credit-card.jpg"
import { IoMdEye } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { RiMastercardFill } from "react-icons/ri";
import { FaCcVisa } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdEyeOff } from "react-icons/io";



function Image() {
  const [showCards, setShowCards] = useState(false);

  // Effect to handle scrolling when showCarousel changes
  useEffect(()=>{
    if(showCards){
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    }
    else{
      // Disable scrolling
      document.body.style.overflow = 'auto';
    }
  }, [showCards]);
  
  const showCardsHandler =()=>{
    setShowCards(!showCards);
  }
  return (
    <>
      <div className={styles.image}>
          <img src={imageSrc} alt="Credit Card" />
          <button onClick={showCardsHandler} className={styles.allAccBtn}>My Cards</button>
      </div>
      {showCards && <AllCards setShowCards={setShowCards}/>}
    </>
  );
}

export default Image;

