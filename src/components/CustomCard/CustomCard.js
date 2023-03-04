import { useEffect } from "react";
import AOS from "aos";

import "./customCard.css";

const CustomCard = ({ title, image, padding }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="customCard" data-aos="flip-right">
      <div className="card-text">
        <h3>{title}</h3>
        <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
      </div>
      <div className="card-img text-center">
        <img
          className={`img-fluid w-100 p-${padding}`}
          src={image}
          alt="occasionImage"
        />
      </div>
    </div>
  );
};

export default CustomCard;
