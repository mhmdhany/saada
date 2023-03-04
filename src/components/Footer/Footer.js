import SaadaLogo from "../../assets/imgs/saadaLogo2.png";
import InstagramIcon from "../../assets/imgs/instgram.png";
import FacebookIcon from "../../assets/imgs/face.png";
import SnapIcon from "../../assets/imgs/snap.png";
import FooterImg from "../../assets/imgs/footer-arrow.png";

import styles from "./Footer.module.css";

const Footer = () => {
  const FooterLinks = [
    {
      id: 1,
      text: "الرئيسية",
    },
    {
      id: 2,
      text: "عن سعادة",
    },
    {
      id: 3,
      text: "تواصل معنا",
    },
    {
      id: 4,
      text: "اعياد ميلاد",
    },
    {
      id: 5,
      text: "مناسبات خاصة",
    },
    {
      id: 6,
      text: "هدايا تخرج",
    },
    {
      id: 7,
      text: "هدايا زواج",
    },
    {
      id: 8,
      text: "مولود جديد",
    },
  ];
  const ContactIcons = [
    {
      id: 1,
      image: InstagramIcon,
    },
    {
      id: 2,
      image: FacebookIcon,
    },
    {
      id: 3,
      image: SnapIcon,
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className={`row ${styles.infos}`}>
          <div className="col-md-12 col-lg-3">
            <div className={styles["footer-desc"]}>
              <img src={SaadaLogo} alt="SaadaLogo" />
              <p className={styles.description}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى
              </p>
              {/* Contact icons */}
              <div
                className={` contact-icons justify-content-center justify-content-md-start`}>
                {ContactIcons.slice(0, 3).map((item) => {
                  return (
                    <a key={item.id} href="/">
                      <img src={item.image} alt={`icon-${item.id}`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="col-md-6 col-lg-2">
            <div className={styles["links-list"]}>
              <span className={styles.title}>روابط مهمة</span>
              <ul className="list-unstyled p-0">
                {FooterLinks.slice(0, 3).map((item) => {
                  return <li key={item.id}>{item.text}</li>;
                })}
              </ul>
            </div>
          </div>

          {/* Footer links */}
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-6">
                <div className={styles["links-list"]}>
                  <span className={styles.title}>الاقسام</span>
                  <ul className="list-unstyled p-0">
                    {FooterLinks.slice(3, 6).map((item) => {
                      return <li key={item.id}>{item.text}</li>;
                    })}
                  </ul>
                </div>
              </div>

              {/* Footer links */}
              <div className="col-md-6">
                <div className={styles["links-list"]}>
                  <ul className={`list-unstyled p-0 ${styles.custom}`}>
                    {FooterLinks.slice(6, 8).map((item) => {
                      return <li key={item.id}>{item.text}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mx-auto mx-lg-0 ">
            <img className="img-fluid" src={FooterImg} alt="FooterImg" />
          </div>
        </div>
        {/* Footer rights */}
        <div className={`${styles.rights} row py-3 align-items-center`}>
          <div className={`col-sm-6 ${styles["rights-r"]}`}>
            <p className="m-0">
              جميع الحقوق محفوظة لـ <span>سعادة</span> @2022
            </p>
          </div>
          <div className={`col-sm-6 ${styles["rights-l"]}`}>
            <p className={`${styles["design-text"]} m-0`}>
              تصميم وبرمجة شركة <span>نيوبي</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
