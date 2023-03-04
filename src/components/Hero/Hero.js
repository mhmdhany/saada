import { useEffect } from "react";
import Mask from "../../assets/imgs/hero.png";

import AOS from "aos";

import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        {/* Hero Text */}
        <div className={styles["hero-text"]}>
          <h1>هداياك المفضلة لجميع المناسبات</h1>
          {/* Choose Gift button */}
          <button className={`btn ${styles["choose-btn"]} `} data-aos="flip-up">
            اختر هديتك الآن
          </button>
        </div>
        {/* Hero Image */}
        <div className={styles.bg} data-aos="fade-right">
          <img className="img-fluid " src={Mask} alt="Mask" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
