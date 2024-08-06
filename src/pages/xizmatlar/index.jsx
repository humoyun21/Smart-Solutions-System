import React, { useState } from "react";
import "./style.scss";
import suvombor from "../../assets/images/suvombor.png";

import suvombor1 from "../../assets/images/suvombor.png";
import avtomat from "../../assets/images/avtomat.jpg";
import melirotsiya from "../../assets/images/melirotsiya.jpg";
import standart from "../../assets/images/standart.jpg";
import quyoshpanellari from "../../assets/images/quyoshpanellari.jpeg";
import suvolchash from "../../assets/images/suvolchash.jpg";


function Index() {
  const content = {
    title: "To'liq xizmatlar to'plami",
    description: `Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. 
      Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. 
      Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. 
      Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari, `,
  };

  const [selectedCard, setSelectedCard] = useState({
    title: "",
    description: "",
    imgSrc: "",
  });

  const cardsData = [
    {
      title: "Avtomat",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: avtomat,
    },
    {
      title: "Suvombor",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: suvombor1,
    },
    {
      title: "Melirotsiya",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: melirotsiya,
    },
    {
      title: "Standart",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: standart,
    },
    {
      title: "Quyosh Panellari",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: quyoshpanellari,
    },
    {
      title: "Suv O'lchash",
      description: "Buyurtmachi bilan ishimiz uskuna narxini batafsil hisoblash uchun dastlabki ma'lumotlarni yig'ishdan boshlanadi. Agar kerak bo'lsa, bizning mutaxassislarimiz saytga borib, kerakli tekshiruvni o'tkazishlari va barcha o'lchovlarni olishlari mumkin. Keyinchalik, bizning mutaxassislarimiz Buyurtmachining dizaynerlari bilan birgalikda tuzilmalarni avtomatlashtirilgan monitoringi maqsadlarini aniqlaydilar. Qanday parametrlarni kuzatish kerak, qanday chastota bilan va hokazo. Dastlabki ishlar natijalariga ko'ra, biz tizimning tarkibi, jihozlarning miqdori va texnik tavsiflari,",
      imgSrc: suvolchash,
    },
  ];

  const handleCardClick = (title, description, imgSrc) => {
    setSelectedCard({ title, description, imgSrc });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };


  const cardData = [
    {
      imgSrc: suvombor,
      title: "Loyihani qo'llab-quvvatlash va barcha bosqichlarni bitta tashkilot tomonidan nazorat qilish",
    },
    {
      imgSrc: melirotsiya,
      title: "Loyihani qo'llab-quvvatlash va barcha bosqichlarni bitta tashkilot tomonidan nazorat qilish",
    },
    {
      imgSrc: quyoshpanellari,
      title: "Loyihani qo'llab-quvvatlash va barcha bosqichlarni bitta tashkilot tomonidan nazorat qilish",
    },
    {
      imgSrc: suvolchash,
      title: "Loyihani qo'llab-quvvatlash va barcha bosqichlarni bitta tashkilot tomonidan nazorat qilish",
    },
    // Add more objects as needed
  ];
  
  return (
    <>
     <div className="intro">
  <div className="intro-text">
    <h2>Introduction Title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore laudantium ab optio vitae numquam, odit quas. Nam, nemo numquam!
    </p>

    <button>
      Read more
    </button>
  </div>
  <div className="intro-image">
    <img src={suvombor} alt="Introduction Image" />
  </div>
      </div>

      <div className="service">
        <div className="service-title">
          <p>{selectedCard.title || content.title}</p>
          <img src={selectedCard.imgSrc || suvombor} alt="" />
        </div>

        <div className="service-description">
          <img src={selectedCard.imgSrc || suvombor} alt="" />
          <div>
            <h3>{selectedCard.title || content.title}</h3>
            <h2>{selectedCard.description || content.description}</h2>
          </div>
        </div>
      </div>

      <div className="about">
      <div className=" container">
      <h1>Nega biz bilan ishlashingiz kerak?</h1>
      <p>
        Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
        ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
        tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
        etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
        tizimlariga buyurtma berishning afzalliklari:
      </p>
      <div className="about-card-grid">
        {cardData.map((card, index) => (
          <div key={index} className="about-card-wrap">
            <img src={card.imgSrc} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>

      </div>

      
      

      <div className="cards">
  {cardsData.map((card, i) => (
    <div
      key={i}
      className="cards-wrap"
      onClick={() =>
        handleCardClick(card.title, card.description, card.imgSrc)
      }
    >
      <div className="card-content">
        <h2>{card.title}</h2>
        <p>{truncateText(card.description, 100)}</p>
      </div>
      <img src={card.imgSrc} alt={card.title} />
    </div>
  ))}
      </div>




    </>
  );
}

export default Index;
