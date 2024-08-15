import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

import Sux from "../../assets/images/sux.svg";
import Bkpi from "../../assets/images/bkpi.svg";
import Iroq from "../../assets/images/iroq.svg";
import Suv from "../../assets/images/suv.png";
import Muhum from "../../assets/images/muhum.png";
import Sisgeo from "../../assets/images/sisgeo.png";
import Taliho from "../../assets/images/taliho.png";
import Xylem from "../../assets/images/xylem.png";
import Winshef from "../../assets/images/winshef.png";
import Daxi from "../../assets/images/daxi.png";
import Dyp from "../../assets/images/dyp.png";
import Panda from "../../assets/images/panda.png";

import './style.scss';

import { Pagination, Autoplay } from 'swiper/modules';

const localPartners = [
  { src: Sux, name: "Sux", description: "Description for Sux", url: "https://sux.com" },
  { src: Bkpi, name: "Bkpi", description: "Description for Bkpi", url: "https://bkpi.com" },
  { src: Iroq, name: "Iroq", description: "Description for Iroq", url: "https://iroq.com" },
  { src: Suv, name: "Suv", description: "Description for Suv", url: "https://suv.com" },
  { src: Muhum, name: "Muhum", description: "Description for Muhum", url: "https://muhum.com" },
];

const foreignPartners = [
  { src: Sisgeo, name: "Sisgeo", description: "Description for Sisgeo", url: "https://sisgeo.com" },
  { src: Taliho, name: "Taliho", description: "Description for Taliho", url: "http://www.tailhoo.com" },
  { src: Xylem, name: "Xylem", description: "Description for Xylem", url: "https://www.xylem.com" },
  { src: Winshef, name: "Winshef", description: "Description for Winshef", url: "https://www.wenshengsolar.com" },
  { src: Daxi, name: "Daxi", description: "Description for Daxi", url: "http://www.dax-instruments.com" },
  { src: Dyp, name: "Dyp", description: "Description for Dyp", url: "https://www.dypcn.com" },
  { src: Panda, name: "Panda", description: "Description for Panda", url: "http://www.pandametering.com" },
];


export default function Index() {
  const swiperSettings = {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000, disableOnInteraction: false },
    modules: [Pagination, Autoplay],
    loop: true,
  };
  const swiperSettingss = {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000, disableOnInteraction: false },
    modules: [Pagination, Autoplay],
    loop: true,
  };
  return (
    <>
      <h2 className='parent-text'>Mahalliy hamkorlar</h2>
      <Swiper {...swiperSettings} className="localPartnerSwiper">
        {localPartners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Card
              className="localPartnerCard"
              onClick={() => window.open(partner.url, "_blank")} // Kartaga bosilganda URL ochiladi
              style={{ cursor: "pointer" }} // Kursorga o'zgartirish qo'shiladi
            >
              <CardMedia
                component="img"
                image={partner.src}
                alt={partner.name}
                className="localPartnerLogo"
              />
              <CardContent>
                <Typography variant="h6" align="center">{partner.name}</Typography>
                <Typography variant="body2" align="center">{partner.description}</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className='parent-text'>Xorijiy Hamkorlar</h2>
      <Swiper {...swiperSettingss} className="foreignPartnerSwiper">
        {foreignPartners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Card
              className="foreignPartnerCard"
              onClick={() => window.open(partner.url, "_blank")} 
              style={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                image={partner.src}
                alt={partner.name}
                className="foreignPartnerLogo"
              />
              <CardContent>
                <Typography variant="h6" align="center">{partner.name}</Typography>
                <Typography variant="body2" align="center">{partner.description}</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
