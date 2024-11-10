import React, { useState } from 'react';
import styles from './Profile.module.css';
import personalProfilePhoto from '../../assets/kvercxi 1.jpg';
import companyProfilePhoto from '../../assets/Gm.png';
import penIcon from '../../assets/pen-solid.svg';
import cameraIcon from '../../assets/camera-solid.svg';

function Profile() {
  const [selectedCategory, setSelectedCategory] = useState('profile');
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [showCompanyImagePopup, setShowCompanyImagePopup] = useState(false);
  const [showTextPopup, setShowTextPopup] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [name, setName] = useState('შენი სახელი');
  const [lastName, setLastName] = useState('შენი გვარი');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [companyName, setCompanyName] = useState('შენი კომპანია');
  const [companyId, setCompanyId] = useState('123456789');
  const [position, setPosition] = useState('შენი თანამდებობა');
  const [currentText, setCurrentText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleImageChange = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleSaveImage = () => {
    setShowImagePopup(false);
  };

  const handleSaveText = () => {
    if (currentField === 'name') {
      setName(currentText);
    } else if (currentField === 'lastName') {
      setLastName(currentText);
    } else if (currentField === 'phone') {
      setPhone(currentText);
    } else if (currentField === 'companyName') {
      setCompanyName(currentText);
    } else if (currentField === 'companyId') {
      setCompanyId(currentText);
    } else if (currentField === 'position') {
      setPosition(currentText);
    }
    setShowTextPopup(false);
  };

  const handleCancel = () => {
    setShowImagePopup(false);
    setShowCompanyImagePopup(false);
    setShowTextPopup(false);
    setCurrentText('');
  };

  const handlePenClick = (field) => {
    setCurrentField(field);
    setCurrentText('');
    setShowTextPopup(true);
  };

  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  const fieldLabels = {
    name: 'სახელი',
    lastName: 'გვარი',
    phone: 'ტელეფონის ნომერი',
    companyName: 'კომპანიის სახელი',
    companyId: 'IDENTIFICATION NUMBER',
    position: 'თანამდებობა',
    password: 'პაროლი',
    email: 'ელ. ფოსტა'
  };

  const popupHeadingText = {
    name: 'შეცვალეთ სახელი',
    lastName: 'შეცვალეთ გვარი',
    phone: 'შეცვალეთ ტელეფონის ნომერი',
    companyName: 'შეცვალეთ კომპანიის სახელი',
    companyId: 'შეცვალეთ იდენტიფიკაციის კოდი',
    position: 'შეცვალეთ თანამდებობა',
    password: 'შეცვალეთ პაროლი',
    email: 'შეცვალეთ ელ. ფოსტა'
  };

  const placeholderText = {
    name: 'შეიყვანეთ სახელი',
    lastName: 'შეიყვანეთ გვარი',
    phone: 'შეიყვანეთ ტელეფონის ნომერი',
    companyName: 'შეიყვანეთ კომპანიის სახელი',
    companyId: 'შეიყვანეთ იდენტიფიკაციის კოდი',
    position: 'შეიყვანეთ თანამდებობა',
    password: 'შეიყვანეთ პაროლი',
    email: 'შეიყვანეთ ელ. ფოსტა'
  };

  return (
    <div className={styles.profileContainer}>
      {/* Burger Menu Icon */}
      <div className={`${styles.burgerMenu} ${burgerOpen ? styles.open : ''}`} onClick={toggleBurgerMenu}>
        ☰
      </div>

      {/* Sidebar - Visible only when burger menu is clicked */}
      <div className={`${styles.sidebar} ${burgerOpen ? styles.open : ''}`}>
        <h2>კატეგორიები</h2>
        <ul>
          <li
            className={selectedCategory === 'profile' ? styles.active : ''}
            onClick={() => setSelectedCategory('profile')}
          >
            პროფილი
          </li>
          <li
            className={selectedCategory === 'security' ? styles.active : ''}
            onClick={() => setSelectedCategory('security')}
          >
            დაცვა
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {selectedCategory === 'profile' && (
          <div className={styles.profileSection}>
            <h2>პირადი პროფილი</h2>
            <div className={styles.profileInfoContainer}>
              <div className={styles.profilePhotoContainer}>
                <img
                  src={imageFile || personalProfilePhoto}
                  alt="Personal Profile"
                  className={styles.profilePicture}
                />
                <img
                  src={cameraIcon}
                  alt="Change Profile Photo"
                  className={styles.cameraIcon}
                  onClick={() => setShowImagePopup(true)}
                />
              </div>
              <div className={styles.profileInfo}>
                <p>
                  <strong>სახელი:</strong> {name}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('name')}
                  />
                </p>
                <p>
                  <strong>გვარი:</strong> {lastName}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('lastName')}
                  />
                </p>
                <p>
                  <strong>ტელეფონის ნომერი:</strong> {phone}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('phone')}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === 'profile' && (
          <div className={styles.companySection}>
            <h2>კომპანიის პროფილი</h2>
            <div className={styles.profileInfoContainer}>
              <div className={styles.profilePhotoContainer}>
                <img
                  src={companyProfilePhoto}
                  alt="Company Profile"
                  className={styles.profilePicture}
                />
                <img
                  src={cameraIcon}
                  alt="Change Company Photo"
                  className={styles.cameraIcon}
                  onClick={() => setShowCompanyImagePopup(true)}
                />
              </div>
              <div className={styles.profileInfo}>
                <p>
                  <strong>კომპანიის სახელი:</strong> {companyName}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('companyName')}
                  />
                </p>
                <p>
                  <strong>IDENTIFICATION NUMBER:</strong> {companyId}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('companyId')}
                  />
                </p>
                <p>
                  <strong>Position:</strong> {position}
                  <img
                    src={penIcon}
                    alt="Edit"
                    className={styles.penIcon}
                    onClick={() => handlePenClick('position')}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === 'security' && (
          <div className={styles.securitySection}>
            <h2>დაცვა</h2>
            <p>
              <strong>შეცვალეთ პაროლი</strong>
              <img
                src={penIcon}
                alt="Edit"
                className={styles.penIcon}
                onClick={() => handlePenClick('password')}
              />
            </p>
            <p>
              <strong>ელ. ფოსტა:</strong> example@mail.com
              <img
                src={penIcon}
                alt="Edit"
                className={styles.penIcon}
                onClick={() => handlePenClick('email')}
              />
            </p>
          </div>
        )}
      </div>

      {/* Popup for editing text fields */}
      {showTextPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>{popupHeadingText[currentField]}</h2>
            <input
              type="text"
              placeholder={placeholderText[currentField]}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
            />
            <div className={styles.popupActions}>
              <button className={styles.saveBtn} onClick={handleSaveText}>
                Save
              </button>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Popup for changing profile image */}
      {showImagePopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>Upload Profile Picture</h2>
            <input type="file" onChange={handleImageChange} />
            <div className={styles.popupActions}>
              <button className={styles.saveBtn} onClick={handleSaveImage}>
                Save
              </button>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Company Image Popup for changing company image */}
      {showCompanyImagePopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>Upload Company Logo</h2>
            <input type="file" onChange={handleImageChange} />
            <div className={styles.popupActions}>
              <button className={styles.saveBtn} onClick={handleSaveImage}>
                Save
              </button>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
