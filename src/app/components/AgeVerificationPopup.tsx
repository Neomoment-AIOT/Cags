"use client"; 
import styles from "./style.module.css";
import Image from 'next/image';
import { useEffect, useState } from 'react';

type AgeVerificationPopupProps = {
  onConfirm: () => void;
};

export default function AgeVerificationPopup({ onConfirm }: AgeVerificationPopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const hasVerified = localStorage.getItem('ageVerified');
    if (!hasVerified) {
      setShowPopup(true);
    }
  }, []);

  const handleConfirm = () => {
    // Store verification in local storage
    localStorage.setItem('ageVerified', 'true');
    onConfirm();
    setShowPopup(false);
    
    // Optionally send IP to backend to track verification
    fetch('@/app/api/verify_age', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // The IP will be detected on the server side
      body: JSON.stringify({ verified: true }),
    });
  };

  const handleDeny = () => {
    alert("You must be 18 or older to view this content.");
    window.location.href = 'https://www.google.com'; 
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContainerInside}>
        <div className={styles.popupContainerBox}>
          <div className={styles.popupImage}>
            <Image 
              src="/favwhite.png" 
              alt="CAGS Logo"
              width={60}
              height={60}
            />
          </div>
          <h1 className={styles.popupMainHeading}>Welcome to CAGS</h1>
          <p className={styles.popupparagraph}>
            This website contains images of tobacco products. Please verify your age to continue.
          </p>
        </div>
        <div className={styles.popupAgeconfimation}>
          <p className={styles.popupAgeverification}>
            I am 18 years old or over
          </p>
          <div className={styles.popupMainButtons}>
            <button 
              onClick={handleConfirm}
              className={styles.popupButtonYes}>
              Yes
            </button>
            <button
              onClick={handleDeny}
              className={styles.popupButtonNo}>
              No
            </button>
          </div>
          <p className={styles.popupDisclaimer}>
            By accessing this site, you confirm that you meet or<br/>exceed the age requirement of 18 years.
          </p>
        </div>
      </div>
    </div>
  );
}