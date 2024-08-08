import "./style.scss";
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Axmadjon from "../../assets/images/axmadjon.jpg";
import Azimov from "../../assets/images/azimov.jpg";
import Bahodir from "../../assets/images/bahodir.jpg";
import Elbek from "../../assets/images/elbek.jpg";
import Fozilov from "../../assets/images/fozilov.jpg";
import Husan from "../../assets/images/husan.jpg";
import Nodirbek from "../../assets/images/nodirbek.jpg";

const teamMembers = [
  {
    name: "Fozilov Ilyosjon",
    position: "Bosh direktor",
    image: Fozilov,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Muxamadjonov Axmadjon",
    position: "Moliya masalalari bo'yicha direktor",
    image: Axmadjon,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Azimov Muzaffa",
    position: "Marketing va xalqaro aloqalar bo'yicha direktor",
    image: Azimov,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Ravshanov Elbek    ",
    position: "Dasturiy ta'minot va multimedia bo'yicha direktor",
    image: Elbek,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Qadamov Sirojbek    ",
    position: "Ishlab chiqarish bo'yicha direktor",
    image: Elbek,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Mo'ydinov Husan    ",
    position: "Bosh buxgalter",
    image: Husan,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Choriev Nodirbek    ",
    position: "Yangi ishlanmalar, ilmiy tadqiqotlar va sinov ishlarini amalga oshirish bo'limi boshlig'i",

    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },
  {
    name: "Buzrukov Bahodir    ",
    position: "Laboratoriya va sinov ishlari bo'lim boshlig'i",
    image: Bahodir,
    social: {
      telegram: "https://t.me/username",
      instagram: "https://instagram.com/username",
      email: "mailto:email@example.com",
      whatsapp: "https://wa.me/number"
    }
  },

];

function Index() {
  return (
    <>
    
   
    <div className="company">
    
        <div className="company-wrap">
          <div className="company-text">
            <h2>Kompaniya haqida</h2>
            <p>
              «Smart Solutions System» kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. Smart Water, Smart Well aqlli qurilmalari aynan «Smart Solutions System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 30 dan ortiq xodim ishlamoqda.
            </p>
          </div>
          <div className="company-video">
            <video controls width="100%">
              <source src="path-to-your-video.mp4" controls="false" />
              Sizning brauzeringiz ushbu videoni qo'llab-quvvatlamaydi.
            </video>
          </div>
        </div>


        <div className="info-section">
    <div className="partners">
      <h3>Hamkorlar</h3>
      <p>
      Smart Solutions System» kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. Smart Water, Smart Well aqlli qurilmalari aynan«Smart Solutions System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 60 dan ortiq xodim ishlamoqda.
      </p>
    </div>

    <div className="clients">
      <h3>Bizning mijozlarimiz</h3>
      <ul>
        <li>O’zbekiston Respublikasi suv xo’jaligi vazirligi</li>
        <li>O’zbekiston Respublikasi suv xo’jaligi vazirligi huzuridagi Amu-Buxoro ITHB</li>
        <li>Qurilish Ta’mirlash MChJ</li>
        <li>Amu Buxoro ITHB</li>
        <li>Janubiy Mirzacho’l magistral kanalidan foydalanish boshqarmasi</li>
        <li>Katta Farg’ona magistral kanali boshqarmasi</li>
        <li>TIIIMSX</li>
      </ul>
    </div>
        </div>

          <div className="team">
             <h1>Jamoa a'zolari</h1>
              <div className="team-members">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card">

                    <div className="team-card-photo">
                    <img src={member.image} alt={member.name} />
                    </div>
                    
                    <div>
                    <h2>{member.name}</h2>
                    <h3>{member.position}</h3>
                    <div className="social-icons">
                      <ul>
                        <li><a href={member.social.telegram}><i className="bi bi-telegram"></i></a></li>
                        <li><a href={member.social.instagram}><i className="bi bi-instagram"></i></a></li>
                        <li><a href={member.social.email}><i className="bi bi-envelope"></i></a></li>
                        <li><a href={member.social.whatsapp}><i className="bi bi-whatsapp"></i></a></li>
                      </ul>
                    </div>
                    </div>
                    
                  </div>
                ))}
              </div>
         </div>
     
    </div>

    </>
  );
}

export default Index;
