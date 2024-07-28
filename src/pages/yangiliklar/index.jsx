import React from "react";
import "./style.scss";

// Images
import Yangiliklardayjesti from "../../assets/images/yangiliklardayjesti.png";
import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

// News data
const newsData = [
  // {
  //   title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
  //   description: "Qozogʻiston Xitoy korporatsiyalari bilan suv resurslarini boshqarish boʻyicha hamkorlik masalalarini koʻrib chiqmoqda...",
  //   image: Yangiliklardayjesti,
  //   link: "Batafsil",
  // },
  // {
  //   title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
  //   description: "Xorazm ilmiy-tajriba stansiyasi hududida suv o'lchash va suv hisobini yuritish mavzusida ko'rgazmali...",
  //   image: Xorazm,
  //   link: "Batafsil",
  // },
  // {
  //   title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
  //   description: "Xitoy davlatining Shanghai Panda Machinery (Group) Co.,Ltd kompaniyasi tomonidan ishlab chiqarilgan ...",
  //   image: Germanya,
  //   link: "Batafsil",
  // },
  // {
  //   title: "Toshkent Xalqaro Investitsiya Forumi",
  //   description: "O'zida 2500 mamlakatdan 93 nafardan ziyod ishtirokchini jamlagan III Toshkent Xalqaro Investitsiya ...",
  //   image: Tashkent,
  //   link: "Batafsil",
  // },
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description: "Qozogʻiston Xitoy korporatsiyalari bilan suv resurslarini boshqarish boʻyicha hamkorlik masalalarini koʻrib chiqmoqda...",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description: "Xorazm ilmiy-tajriba stansiyasi hududida suv o'lchash va suv hisobini yuritish mavzusida ko'rgazmali...",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description: "Xitoy davlatining Shanghai Panda Machinery (Group) Co.,Ltd kompaniyasi tomonidan ishlab chiqarilgan ...",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description: "O'zida 2500 mamlakatdan 93 nafardan ziyod ishtirokchini jamlagan III Toshkent Xalqaro Investitsiya ...",
    image: Tashkent,
    link: "Batafsil",
  },
  
];

// const NewsSection = () => {
//   return (
//     <section id="news-section">
//       <div className="news-container">
//         <div className="news-content-box">
//           <div className="news-grid-container">
//             {newsData.slice(0, 4).map((item, index) => (
//               <div key={index} className={`news-card ${index === 0 ? "news-card-featured" : ""}`}>
//                 <img className="news-card-img" src={item.image} alt={item.title} />
//                 <div className="news-card-data">
//                   <h4 className="news-card-title">{item.title}</h4>
//                   <p className="news-card-description">{item.description}</p>
//                   <a className="news-card-button" href="#">{item.link}</a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="news-grid-container">
//             {newsData.slice(4).map((item, index) => (
//               <div key={index} className={`news-card ${index === 0 ? "news-card-featured" : ""}`}>
//                 <img className="news-card-img" src={item.image} alt={item.title} />
//                 <div className="news-card-data">
//                   <h4 className="news-card-title">{item.title}</h4>
//                   <p className="news-card-description">{item.description}</p>
//                   <a className="news-card-button" href="#">{item.link}</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;



// import "./style.scss";

function Index() {

   

    const truncateDescription = (...el)=>{
        console.log(el);
    }
    return <>
        <section className="news" >
            <h2 className="section-title1">Yangiliklar</h2>
            <h4 className="section-title">Lorem ipsum dolor.</h4>
            <div className="news-wrap">
                <div className="content-box">
                    <div className="grid-container ">
                        {newsData?.map((item, index) => (
                            <div
                                className={`card-article  ${index === 0
                                        ? "card-featured"
                                        : index === 3
                                            ? "card-full-width"
                                            : index === 2
                                            ? "test-content"
                                            : "card-small"
                                    }`
                                }
                                key={index}
                            >
                                <img
                                    className={`card-img ${index === 0 || index === 3 ? "card-img-short" : ""
                                        }`}
                                    src={item?.image}
                                    alt={`Feature ${index}`}
                                />
                                <div className="card-data">
                                    <h4 className="card-title">{item?.title}</h4>
                                    {index === 0 ? (
                                        <p className="card-description">{item?.description}</p>
                                    ) : (
                                        <p className="card-description">
                                            {truncateDescription(item?.description, 100)}
                                        </p>
                                    )}
                                    <p className="card-button">{item?.link}</p>
                                </div>
                                </div>
                        ))}
                    </div>
                </div>
                <div className="products-btn">
                    <button>
                        All News
                    </button>

                </div>
            </div>

        </section>

    </>
}

export default Index