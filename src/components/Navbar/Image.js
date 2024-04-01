import React,{useState} from 'react';
import styles from '../../styles/Navbar/Image.module.css'
import imageSrc from "../../assets/credit-card.jpg"
import { IoMdEye } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { RiMastercardFill } from "react-icons/ri";
import { FaCcVisa } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdEyeOff } from "react-icons/io";

const data = [
  {
    cardOwner: "Alban Zyle",
    cardExpiration: "03\\28",
    cardNumberHidden: "1245 **** **** 0123",
    cardNumberVisible: "1245 7895 4218 0123",
    cardCVVHidden: "***",
    cardCVVVisible: "456",
    cardBalance: "200,000",
    cardTypeVisa: true,
    cardTypeCach: false,
    cardTypemaster: false,
  },
  {
    cardOwner: "John Doe",
    cardExpiration: "05\\25",
    cardNumberHidden: "9876 **** **** 5678",
    cardNumberVisible: "9876 5432 1098 5678",
    cardCVVHidden: "***",
    cardCVVVisible: "789",
    cardBalance: "50,000",
    cardTypeVisa: false,
    cardTypeCach: false,
    cardTypemaster: true,
  },
  {
    cardOwner: "Jane Smith",
    cardExpiration: "09\\23",
    cardNumberHidden: "4567 **** **** 8901",
    cardNumberVisible: "4567 3210 9876 8901",
    cardCVVHidden: "***",
    cardCVVVisible: "123",
    cardBalance: "100,000",
    cardTypeVisa: false,
    cardTypeCach: true,
    cardTypemaster: false,
  }
];

function Image() {
  const [showCards, setShowCards] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const showCardsHandler =()=>{
    setShowCards(!showCards);
  }
  const showDetailsHandler =()=>{
    console.log(showDetails);
    setShowDetails(!showDetails);
  }

  const removeCardsHandler =()=>{
    setShowCards(false);
  }
  const handleCardClick = (event) => {
    event.stopPropagation();
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ffffff",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
    setShowDetails(false);
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
    setShowDetails(false);

  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // untl here
  return (
    <>
      <div className={styles.image}>
          <img src={imageSrc} alt="Credit Card" />
          <button onClick={showCardsHandler} className={styles.allAccBtn}>My Cards</button>
      </div>
      {showCards && 
      <div  onClick={removeCardsHandler} className={styles.background}>
        {/* <div onClick={handleCardClick} className={styles.allCards}> */}
           {/* New code starts here */}
            <div onClick={handleCardClick} className={styles.carousel}>
              <div className={styles.carouselImages}>
              <AnimatePresence>
                <div className={styles.top}>
                <h2>My Cards</h2>
                <button className={styles.addButton}>+ Add Card</button>
                </div>
                <motion.div key={currentIndex} className={styles.insideCard}>
                  <div className={styles.topInside}>
                    <div className={styles.topLeft}>
                      <p className={styles.cardOwner}>{data[currentIndex].cardOwner}</p>
                      <p className={styles.cardExpiration}>{data[currentIndex].cardExpiration}</p>
                    </div>
                    <div className={styles.topRight}>
                      { !showDetails ?<p className={styles.cardNumber}>{data[currentIndex].cardNumberHidden}</p>: <p className={styles.cardNumber}>{data[currentIndex].cardNumberVisible}</p> }
                      <div className={styles.topInside}>
                      { ! showDetails ? <p className={styles.cardCVV}>***</p>: <p className={styles.cardCVV}>{data[currentIndex].cardCVVVisible}</p>}
                       { !showDetails ? <IoMdEye key={`myeye-on-${currentIndex}`} onClick={showDetailsHandler} className={styles.eye}/> : <IoMdEyeOff key={`myeye-off-${currentIndex}`}  onClick={showDetailsHandler} className={styles.eye}/>}
                      </div>
                    </div>
                  </div>

                  <div className={styles.bottonInside}>
                    <h1 className={styles.cardBalance}>${data[currentIndex].cardBalance}</h1>
                    {data[currentIndex].cardTypeVisa && <FaCcVisa className={styles.cardType}/>}
                    {data[currentIndex].cardTypeCach && <GiMoneyStack className={styles.cardType}/>}
                    {data[currentIndex].cardTypemaster && <RiMastercardFill className={styles.cardType}/>}
                  </div>


                </motion.div>

              </AnimatePresence>
              <div className={styles.slideDirection}>
                <motion.div
                  variants={slidersVariants}
                  whileHover="hover"
                  className={styles.left}
                  onClick={handlePrevious}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                  </svg>
                </motion.div>
                <motion.div
                  variants={slidersVariants}
                  whileHover="hover"
                  className={styles.right}
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className={styles.carouselIndicator}>
              {data.map((_, index) => (
                <motion.div
                  key={index}
                  className={`${styles.dot}  ${currentIndex == index ? styles.active : ""}`}
                  onClick={() => handleDotClick(index)}
                  initial="initial"
                  animate={currentIndex === index ? "animate" : ""}
                  whileHover="hover"
                  variants={dotsVariants}
                ></motion.div>
              ))}
            </div>
          </div>
           {/* New code ends here */}
        </div>
      // </div>
      }
    </>
  );
}

export default Image;

