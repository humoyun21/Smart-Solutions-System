import React from "react";
import "./style.scss";

// Images
import Yangiliklardayjesti from "../../assets/images/yangiliklardayjesti.png";
import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

// News data
const newsData = [
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description: "1",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description: "2",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description: "3",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description: "4.",
    image: Tashkent,
    link: "Batafsil",
  },
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description: "1",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description: "2",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description: "3",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description: "4.",
    image: Tashkent,
    link: "Batafsil",
  },
];

const NewsSection = () => {
  return (
    <section id="news-section">
      <div className="news-container">
        <div className="news-content-box">
          <h2 className="news-section-title">Yangiliklar</h2>
          <h4 className="news-section-subtitle">Lorem ipsum dolor.</h4>

          <div className="news-grid-container">
            {newsData.map((item, index) => (
              <div
                className={`news-card-article ${index === 0 ? "news-card-featured" : ""}`}
                key={index}
              >
                <img className="news-card-img" src={item.image} alt={`Feature ${index}`} />
                <div className="news-card-data">
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-description">{item.description}</p>
                  <a className="news-card-button" href="#">{item.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
