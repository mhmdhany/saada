import MainImage from "../../assets/imgs/about.png";
import CapImage from "../../assets/imgs/cap.png";
import BoxImage from "../../assets/imgs/cap2.png";
import More from "../../assets/imgs/arrow-2.png";

import AOS from "aos";

import styles from "./About.module.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">
          {/* Favorite Gifts */}
          <div className="col-lg-6" data-aos="flip-left">
            <div className={styles["about-main"]}>
              <h3 className={styles.title}>هداياك المفضلة لجميع المناسبات.</h3>
              <img
                className={`${styles["box-img"]} img-fluid`}
                src={MainImage}
                alt="MainImage"
              />
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0" data-aos="flip-right">
            <div className={styles["about-cards"]}>
              <div className={styles["card-left"]}>
                <img className="img-fluid" src={CapImage} alt="CapImage" />
                <p className={styles.desc}>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>

              <div className={`${styles["card-left"]} ${styles["card-co"]} }`}>
                {/* Read more button */}
                <a className={styles.readMore} href="/">
                  اقرأ المزيد عن سعادة <img src={More} alt="More" />
                </a>
                <img className="img-fluid" src={BoxImage} alt="BoxImage" />
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
