import Group from "../../assets/imgs/Group.png";
import Group62 from "../../assets/imgs/check.png";
import Group64 from "../../assets/imgs/reload.png";

import AOS from "aos";

import styles from "./Feature.module.css";
import { useEffect } from "react";

const Feature = () => {
  const featureList = [
    {
      id: 1,
      imgSrc: Group,
      description: "هدايا مميزة",
    },
    {
      id: 2,
      imgSrc: Group62,
      description: "طرق دفع آمنة",
    },
    {
      id: 3,
      imgSrc: Group64,
      description: "شحن سريع",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.feature}>
      <div className="container">
        <div
          className={`row align-items-center flex-wrap ${styles["feature-content"]}`}>
          <div className="col-md-12 col-lg-6">
            <h2 data-aos="fade-down">خصص هديتك مع سعادة.</h2>
          </div>
          {/* Features items */}
          {featureList.map((item) => {
            return (
              <div
                key={item.id}
                className="col-md-4 col-lg-2"
                data-aos="fade-up"
                data-aos-duration={`${item.id * 1000}`}>
                <div className={styles["feature-box"]}>
                  <img src={item.imgSrc} alt="Group" />
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
