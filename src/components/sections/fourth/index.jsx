import React from "react";
import "./style.scss";
import Feature1 from "../../../assets/images/feature.jpg";
import Feature2 from "../../../assets/images/featured1.jpg";
import Feature3 from "../../../assets/images/featured2.jpg";

const productData = [
  {
    title: "Hymn to the United Nations",
    description:
      "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature1,
    link: "Read more",
  },
  {
    title: "A symbol of hope for global unity",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
    image: Feature2,
    link: "Read more",
  },
  {
    title: "How it Started?",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
    image: Feature3,
    link: "Read more",
  },
  {
    title: "Hymn to the United ",
    description:
      "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature1,
    link: "Read more",
  },
];

const Index = () => {
  const truncateDescription = (description, length) => {
    return description.length > length ? description.substring(0, length) + "..." : description;
  };

  return (
    <section id="gratis1">
      <div className="container">
        <div className="content-box">
          <h4 className="section-title">Yangiliklar</h4>
          <div className="grid-container">
            {productData.map((item, index) => (
              <div
                className={`card-article ${
                  index === 0 ? "card-featured" : index === 3 ? "card-full-width" : "card-small"
                }`}
                key={index}
              >
                <img
                  className={`card-img ${index === 0 || index === 3 ? "card-img-short" : ""}`}
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
