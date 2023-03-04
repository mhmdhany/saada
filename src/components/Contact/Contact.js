import Arrow from "../../assets/imgs/arrow-left.png";
import Gift from "../../assets/imgs/gift3.png";
import Img1 from "../../assets/imgs/cake1.png";
import Img2 from "../../assets/imgs/cake5.png";
import Img3 from "../../assets/imgs/cake4.png";
import Img4 from "../../assets/imgs/cake3.png";
import Img5 from "../../assets/imgs/cake2.png";
import InstaText from "../../assets/imgs/insta-text.png";



import AOS from "aos";

import styles from "./Contact.module.css";
import { useEffect } from "react";

const Contact = () => {
  const ImagesList = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 2,
      image: Img2,
    },
    {
      id: 3,
      image: Img3,
    },
    {
      id: 4,
      image: Img4,
    },
    {
      id: 5,
      image: Img5,
    },
  ];

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className={styles["contact-main"]}>
          <div className={styles["contact-info"]}>
            <div className="d-flex align-items-center" data-aos="fade-up-left">
              <img className="img-fluid" src={Gift} alt="Gift" />
            </div>
            {/* Contact text */}
            <div
              className={`${styles["contact-text"]} text-center text-md-end`}>
              <h3 className={styles.title}>تواصل معنا</h3>
              <p className={styles.description}>
                تواصل معنا في اي وقت او ارسل الينا وسيتم التواصل معك في أقرب وقت
                للاستفسارات او حل جميع المشاكل التي تواجهك في التسوق من خلال
                موقع سعادة.
              </p>
            </div>
          </div>
          <img className="img-fluid" src={Arrow} alt="Arrow" data-aos="fade-up"/>
        </div>
      </div>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-imgs"]}>
          {/* Contact images list */}
          {ImagesList.map((item) => {
            return (
              <img key={item.id} src={item.image} alt={`img-${item.id}`} data-aos="fade-down" data-aos-duration={`${item.id * 1000}`} />
            );
          })}
        </div>
        {/* Instgram button */}
        <a href="/" className={`${styles["insta-btn"]} btn`}>
          <img src={InstaText} alt='InstaText'/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
