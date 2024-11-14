import React from "react";
import styles from "./contact.module.css";
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
  const handleClick = () => {
    alert("Styled Button clicked!");
  };
  return (
    <div className={styles.contactpage}>
      <div className={styles.contactnavbar}>
        <div className={styles.navbarlogo}>
          GM <span className={styles.color1}>Electronics</span>
        </div>
        <div className={styles.navbartitle}>დაგვიკავშირდით</div>
      </div>
      <div className={styles.mainpage}>
        <div className={styles.leftside}>
          <div className={styles.maintitle}>დაკავშირება</div>
          <div className={styles.addresstitle}>მდებარეობა</div>
          <div className={styles.addressicon}>
            <FiMapPin className={styles.map} />
          </div>
          <div className={styles.addresstext}>ლონდონი, გაერთიანებული სამეფო</div>

          <div className={styles.numbertitle}>ტელეფონის ნომერი</div>
          <div className={styles.numbericon}>
            <IoCallOutline className={styles.call} />
          </div>
          <div className={styles.numbertext}>+123-456-7890</div>

          <div className={styles.emailtitle}>ემაილი</div>
          <div className={styles.emailicon}>
            <MdOutlineEmail />
          </div>
          <div className={styles.emailtext}>example@example.com</div>

          <div className={styles.follow}>გამოგვყევით:</div>
          <div className={styles.followIcons}>
            <a href="https://www.facebook.com/" className={styles.facebook}>
              <SlSocialFacebook />
            </a>
            <a href="https://x.com/" className={styles.twitter}>
              <LuTwitter />
            </a>
            <a href="https://www.youtube.com/" className={styles.youtube}>
              <AiOutlineYoutube />
            </a>
            <a href="https://www.instagram.com/" className={styles.instagram}>
              <IoLogoInstagram />
            </a>
          </div>
        </div>

        <div className={styles.contactcard}>
          <h1 className={styles.cardtitle}>კონტაქტი</h1>
          <input
            type="text"
            name="name"
            className={styles.usernameinput}
            placeholder="მომხმარებლის სახელი"
          />
          <input
            type="text"
            name="name"
            className={styles.usernameinput2}
            placeholder="ემაილი"
          />
          <textarea
            id="userTextarea"
            name="userTextarea"
            rows="4"
            cols="50"
            className={styles.textarea}
            placeholder="შეტყობინება"
          ></textarea>
          <div className={styles.cardtext}>
            გაგზავნით თქვენ ეთანხმებით კონფიდენციალურობის განცხადებაში აღწერილი თქვენი პერსონალური მონაცემების Subx us დამუშავებას.
          </div>
          <button onClick={handleClick} className={styles.cardbutton}>
            გაგზავნა
          </button>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerlogo}>
          GM <span className={styles.color2}>Electronics</span>
        </div>
        <div className={styles.footertext}>
          gofdk eosksd, sdovso sfovsoidi. adv dvaaf sf sdofdvldvvls vssp sdvp
        </div>
        <div className={styles.footeremail}>malto@subx.com</div>

        <div className={styles.features2}>
          <div className={styles.features}>მახასიათებლები</div>
          <a href="#" className={styles.link1}>
            <div className={styles.bm}>ბიზნეს მენეჯერი</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.two}>კონფიგურირებადი ბოტები</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.three}>ავტომატიზირებული პასუხები</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.four}>პროდუქტების ტურები</div>
          </a>
        </div>
        <div className={styles.resourses2}>
          <div className={styles.resourses}>რესურსები</div>
          <a href="#" className={styles.link1}>
            <div className={styles.five}>თეთრიფურცელი და ბლოგი</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.six}>უყურეთ დემო</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.seven}>პროდუქტის ლექსიკონი</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.eight}>ინდუსტრიის ანგარიშები</div>
          </a>
        </div>
        <div className={styles.company2}>
          <div className={styles.company}>კომპანია</div>
          <a href="#" className={styles.link1}>
            <div className={styles.nine}>შესახებ</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.ten}>კლიენტები</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.eleven}>საზოგადოების ფორუმი</div>
          </a>
          <a href="#" className={styles.link1}>
            <div className={styles.twelve}>ვადა და კონფიდენციალურობა</div>
          </a>
        </div>
      </footer>

      <div className={styles.copyright}>
        <div className={styles.copyrighttext}>@ Copyright Subx. All right reserved</div>
      </div>
    </div>
  );
};

export default Contact;
