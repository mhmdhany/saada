import CustomCard from "../CustomCard/CustomCard";

import Bags from "../../assets/imgs//bags.png";
import Tape from "../../assets/imgs/tape.png";
import Mask from "../../assets/imgs/surprise.png";
import Mask4 from "../../assets/imgs/msg.png";
import Mask5 from "../../assets/imgs/Mask.png";

import AOS from "aos";

import "./main.css";

import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main">
      {/* Page Custom ribbons */}
      <div className="overlay position-relative" data-aos="flip-up"></div>
      <div className="overlay2 position-relative" data-aos="flip-up"></div>
      <div className="overlay3 position-relative" data-aos="flip-up"></div>
      <div className="container">
        <div className="card-container">
          {/* Birthday Gifts */}
          <div className="card-content">
            <CustomCard title={"هدايا اعياد ميلاد"} image={Bags} />
          </div>
          <div className="card-content special-gifts">
            <div className="card-img text-center" data-aos="flip-left">
              <img className="img-fluid w-100" src={Tape} alt="Tape" />
            </div>
            <div className="customCard" data-aos="flip-right">
              <div className="card-text mt-4">
                <h3>مناسبات خاصة</h3>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
              </div>
            </div>
          </div>
          {/* Graduation Gifts */}
          <div className="card-content">
            <div className="customCard" data-aos="flip-left">
              <div className="card-text">
                <h3>هدايا تخرج</h3>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
              </div>
            </div>
            <div className="card-img text-center grad-gifts">
              <img className="img-fluid" src={Mask} alt="Tape" />
            </div>
          </div>
          {/* Marriage Gifts */}
          <div className="card-content">
            <div className="customCard" data-aos="flip-up">
              <div className="card-text">
                <h3>هدايا زواج</h3>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
              </div>
            </div>
            <div className="card-img text-center marri-gifts">
              <img className="img-fluid" src={Mask4} alt="Tape" />
            </div>
          </div>
          <div className="card-content birth-gifts w-100 d-flex">
            <div className="customCard w-100 d-flex justify-content-between flex-wrap flex-sm-nowrap">
              <div className="card-img text-center d-flex align-items-center px-5 py-4">
                <img className="img-fluid " src={Mask5} alt="occasionImage" />
              </div>
              <div className="card-text w-100" data-aos="zoom-in">
                <h3>هدايا مولود جديد</h3>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
