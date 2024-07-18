import React from "react";
import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

// Images
import Yangiliklardayjesti from "../../assets/images/yangiliklardayjesti.png";
import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

// Yangiliklar
const newsData = [
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "1  ",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "2",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "3",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "4.",
    image: Tashkent,
    link: "Batafsil",
  },
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "1  ",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "2",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "3",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "4.",
    image: Tashkent,
    link: "Batafsil",
  },
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "1  ",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "2",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "3",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "4.",
    image: Tashkent,
    link: "Batafsil",
  },
  
];

const Index = () => {
  const truncateDescription = (description, length) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };

  return (
    <section id="gratis1">
    <div className="container">
      <div className="content-box">
        <h2 className="section-title1">Yangiliklar</h2>

        <h4 className="section-title">Lorem ipsum dolor.</h4>

        <div className="grid-container ">
          {newsData.map((item, index) => (

           
            <div

              className={`card-article  ${
                index === 0
                  ? "card-featured"
                  : index === 3
                  ? "card-full-width"
                  : "card-small"
              } ${
                index % 4==0 && 'card-end'
              }` 
            }
              key={index}
            >
              <img
                className={`card-img ${
                  index === 0 || index === 3 ? "card-img-short" : ""
                }`}
                src={item.image}
                alt={`Feature ${index}`}
              />
              <div className="card-data">
                <h4 className="card-title">{item.title}</h4>
                {index === 0 ? (
                  <p className="card-description">{item.description}</p>
                ) : (
                  <p className="card-description">
                    {truncateDescription(item.description, 100)}
                  </p>
                )}
                <p className="card-button">{item.link}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </section>
  );
};

export default Index;
