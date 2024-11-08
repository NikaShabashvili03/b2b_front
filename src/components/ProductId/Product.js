import React, { useState } from 'react';
import styles from './Product.module.css'; // Import CSS module
import iphone1 from '../../assets/1.jpg';
import iphone2 from '../../assets/2.jpg';
import iphone3 from '../../assets/3.jpg';

const Product = () => {
  const images = [iphone1, iphone2, iphone3];
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.biggestBox}>
      <div className={styles.productContainer}>
        <div className={styles.carousel}>
          <button className={styles.prev} onClick={prevImage}>❮</button>
          <div className={styles.carouselImagesContainer}>
            <img
              src={images[currentImage]}
              alt="iPhone"
              className={styles.carouselImage}
              onClick={openModal}
            />
          </div>
          <button className={styles.next} onClick={nextImage}>❯</button>
        </div>

        <div className={styles.productInfo}>
          <h3>iPhone 16</h3>
          <div className={styles.productSpecs}>
            <div className={styles.specItem}>
              <span>ეკრანის ზომა</span>
              <span>6.8 inches</span>
            </div>
            <div className={styles.specItem}>
              <span>განახლების სიხშირე</span>
              <span>120Hz</span>
            </div>
            <div className={styles.specItem}>
              <span>ეკრანის ტიპი</span>
              <span>Dynamic AMOLED 2X</span>
            </div>
            <div className={styles.specItem}>
              <span>შიდა მეხსიერება</span>
              <span>256GB</span>
            </div>
            <div className={styles.specItem}>
              <span>Bluetooth</span>
              <span>5.3</span>
            </div>
            <div className={styles.specItem}>
              <span>ოპერატიული მეხსიერება</span>
              <span>12GB</span>
            </div>
          </div>

          <div className={styles.priceBox}>
            <h2>2,430 GEL</h2>
            <div className={styles.buttonContainer}>
              <button className={styles.cartButton}>კალათაში დამატება</button>
            </div>
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        {isModalOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentImage]}
                alt="iPhone enlarged"
                className={styles.modalImage}
              />
              <button className={styles.closeModal} onClick={closeModal}>✖</button>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Info Section */}
      <div className={styles.detailedInfo}>
        <h3>დეტალური ინფორმაცია</h3>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ეკრანის ზომა</span>
          <span className={styles.specValue}>6.1 inches</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>რეზოლუცია</span>
          <span className={styles.specValue}>FHD+</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>განახლების სიხშირე</span>
          <span className={styles.specValue}>60 Hz</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ეკრანის სიკაშკაშე</span>
          <span className={styles.specValue}>2000 nits</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ეკრანის ტიპი</span>
          <span className={styles.specValue}>Super Retina XDR OLED</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ეკრანის დაცვა</span>
          <span className={styles.specValue}>Ceramic Shield</span>
        </div>

        <h4>ტექნიკური მახასიათებლები</h4>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>SIM</span>
          <span className={styles.specValue}>e-SIM</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>5G</span>
          <span className={styles.specValue}>Yes</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>კორპუსი</span>
          <span className={styles.specValue}>Glass, Aluminum</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>IP დაცვა</span>
          <span className={styles.specValue}>IP68</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ჩიპსეტი</span>
          <span className={styles.specValue}>A18</span>
        </div>

        <h4>მეხსიერება</h4>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>შიდა მეხსიერება</span>
          <span className={styles.specValue}>128 GB</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ოპერატიული მეხსიერება</span>
          <span className={styles.specValue}>8 GB</span>
        </div>

        <h4>კამერა</h4>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>ძირითადი კამერა</span>
          <span className={styles.specValue}>48 MP</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>წინა კამერა</span>
          <span className={styles.specValue}>12 MP</span>
        </div>

        <h4>პორტები</h4>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>3.5mm</span>
          <span className={styles.specValue}>No</span>
        </div>

        <div className={styles.specItem}>
          <span className={styles.specLabel}>დასამუხტი პორტი</span>
          <span className={styles.specValue}>Type-C</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
