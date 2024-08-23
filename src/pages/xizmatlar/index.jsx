import React, { useState } from "react";
import "./style.scss";

import { Card, CardContent, CardMedia,Grid, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import suvombor from "../../assets/images/suvombor.png";

import suvombor1 from "../../assets/images/suvombor.png";
import avtomat from "../../assets/images/avtomat.jpg";
import melirotsiya from "../../assets/images/melirotsiya.jpg";
import standart from "../../assets/images/standart.jpg";
import quyoshpanellari from "../../assets/images/quyoshpanellari.jpeg";
import suvolchash from "../../assets/images/suvolchash.jpg";


const StyledCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  paddingBottom: '40px',
  backgroundColor: '#eeecec',
  marginBottom: '20px', // Space between cards
});

const IntroText = styled(CardContent)({
  paddingLeft: '30px',
  width: '50%',
  paddingRight: '20px',
});

const IntroTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#019acc',
  fontSize: '25px',
  marginBottom: '10px',
});

const IntroParagraph = styled(Typography)({
  width: '600px',
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '1.5',
  color: '#3e3d3d',
});

const IntroImage = styled(CardMedia)({
  width: '50%',
  textAlign: 'right',
  
  img: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
});



/////
const CustomCard = styled(Card)({
  backgroundColor: '#e6f0f4',
  borderRadius: '10px',
  boxShadow: 'none',
  margin: '0 auto',
});
const SmallCardMedia = styled(CardMedia)({
  borderRadius: '10px',
  height: 300,
});

const LargeCardMedia = styled(CardMedia)({
  borderRadius: '10px',
  width: '100%',
  height: 'auto',
});
const ServiceTitle = styled(Typography)({
  color: 'rgb(1, 154, 204)',
  fontSize: '20px',
  fontWeight: '500',
  marginBottom: '20px',
});

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


  
  
  return (
    <>
   <StyledCard>
      <IntroText>
        <IntroTitle variant="h2">Introduction Title</IntroTitle>
        <IntroParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore laudantium ab optio vitae numquam, odit quas. Nam, nemo numquam!
        </IntroParagraph>
        <Button
          variant="outlined"
          sx={{
            marginTop: '20px',
            backgroundColor: '#eeecec',
            color: '#007bff',
            borderColor: '#007bff',
            borderRadius: '5px',
            padding: '5px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s, border-color 0.3s, transform 0.3s',
            '&:hover': {
              color: '#22aaff',
              borderColor: '#0056b3',
              transform: 'scale(1.05)',
            },
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          Read more
        </Button>
      </IntroText>
      <IntroImage
        component="img"
        image={suvombor}
        alt="Introduction Image"
      />
    </StyledCard>
    <Box sx={{ backgroundColor: '#e6f0f4', padding: '40px' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <CustomCard>
      <CardContent sx={{ textAlign: 'center' }}>
        <ServiceTitle variant="body1">To'liq xizmatlar to'plami</ServiceTitle>
        <SmallCardMedia
          component="img"
          image={suvombor1} // Kichik rasm manzilini o'rnating
          alt="Service Image"
        />
        <Typography
          variant="body2"
          sx={{
            color: 'rgb(45, 45, 45)',
            fontSize: '16px',
            lineHeight: '1.5',
            marginTop: '20px',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quod nam modi corporis nemo quam autem? Magnam corrupti mollitia optio eaque laudantium repellat molestiae quae? Debitis explicabo dignissimos sint vero reprehenderit praesentium architecto, repudiandae ullam nobis. Error animi nam enim autem deleniti, ex, aliquid adipisci perferendis quia sapiente officiis nisi quibusdam at ipsam quis dolor odio maxime eaque. Inventore voluptatibus tempora veritatis fugit facilis itaque eligendi, reprehenderit culpa doloremque rem.
        </Typography>
      </CardContent>
    </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CustomCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <LargeCardMedia
                component="img"
                image={avtomat} // Katta rasm manzilini o'rnating
                alt="Service Image"
                sx={{ width: '50%'  , height: '600px'}}
              />
              <Box sx={{ marginLeft: '20px', width: '50%' }}>
                <ServiceTitle variant="body1">To'liq xizmatlar to'plami</ServiceTitle>
                <Typography variant="body2" sx={{ color: 'rgb(45, 45, 45)', fontSize: '16px', lineHeight: '1.5' }}>
                  Lorem ipsum dolor sit amet consectetur adipisi voluptatum perferendis. Deleniti obcaecati autem maxime veritatis quae accusamus, aspernatur tenetur amet consectetur, iste ut necessitatibus dolorum ratione cum rerum vel,<br></br> nisi sapiente ex similique sint tempore accusantium. Asperiores, sit quo. Eius architecto aliquid, necessitatibus ab, animi modi quasi harum in ad distinctio amet. Voluptatibus quo velit cum culpa earum? Officia laborum officiis ipsa fugit cupiditate explicabo velit quaerat porro, quae possimus, facilis ullam ducimus facere vel cumque, exercitationem ipsam itaque recusandae? Voluptatem ex hic molestiae obcaecati nobis illo magnam. Ipsum repellat facere modi excepturi, reprehenderit corporis? Amet nobis eum veritatis dolor consequatur aspernatur harum rerum eius voluptates eaque, distinctio excepturi deserunt quis, aut, reprehenderit ut! Laboriosam ullam excepturi nsequatur in impedit odit ex earum. Vel atque voluptate soluta illum odit nesciunt laudantium praesentium quasi maxime numquam aliquid, odio corrupti. Atque, vero!<br></br><br></br> Tempora, nesciunt! Dicta voluptas modi, error facere quaerat magni esse corporis.
                </Typography>
              </Box>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>

      <div className="about">
  <div className="container">
    <h1>Nega biz bilan ishlashingiz kerak?</h1>
    <p>
      Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
      ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
      tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
      etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
      tizimlariga buyurtma berishning afzalliklari:
    </p>
    <div className="about-card-grid">
    
      <div className="about-card-grid-wrap">
        <img src={suvombor} alt="" />
        <div>
      <h3>To'liq xizmatlar to'plami</h3>
        <h2>Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
      ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
      tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
      etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
      tizimlariga buyurtma berishning afzalliklari:Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
      ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
      tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
      etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
      tizimlariga buyurtma berishning afzalliklari:</h2>
      </div>
      </div>
      <div className="about-card-grid-wrap">
      <img src={melirotsiya} alt="" />
      <div>
      <h3>To'liq xizmatlar to'plami</h3>
        <h2>Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
      ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
      tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
      etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
      tizimlariga buyurtma berishning afzalliklari:Sensors One bino va inshootlarning konstruksiyalarini, ham qurilayotgan,
      ham mavjud tuzilmalarni monitoring qilish uchun avtomatlashtirilgan
      tizimlarni jihozlash bo'yicha xizmatlarning to'liq spektrini taklif
      etadi. Avtomatlashtirilgan kalit taslim tuzilmalarni monitoring qilish
      tizimlariga buyurtma berishning afzalliklari:</h2>
      </div>
     
      
      </div>
      
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
