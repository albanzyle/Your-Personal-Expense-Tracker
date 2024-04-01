import React,{useState} from "react";
import styles from '../../../../../styles/Details/Overview/OverviewPage/OverviewRight/Profile.module.css'
import imgSrc from '../../../../../assets/AlbanPhoto.jpeg'
import { BiEdit } from "react-icons/bi";

const Profile =() =>{
    const [imageSrc, setImageSrc] = useState(imgSrc);

    const handleImageChange = (event) => {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setImageSrc(reader.result);
      };
  
      if (selectedFile) {
        reader.readAsDataURL(selectedFile);
      }
    };
  
    const handleEditClick = () => {
      // Trigger the hidden file input
      document.getElementById("fileInput").click();
    };
    return(
        <div className={styles.card}>
            <div >
                <img src={imageSrc} alt="Alban's Photo" className={styles.image}/>
                    <BiEdit className={styles.edit} onClick={handleEditClick} />
                    {/* Hidden input element */}
                    <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    />
            </div>
            <div className={styles.info}>
                <h3>Name: <span>Alban Zyle</span></h3>
                <h3>Email: <span>Alba.Zyle@fti.edu.al</span></h3>
                <h3>Phone:<span>+33768656699</span></h3>
            </div>
        </div>

    );
};

export default Profile;