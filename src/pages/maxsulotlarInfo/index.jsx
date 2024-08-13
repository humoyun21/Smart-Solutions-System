import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Index from "../aloqa";

import Smartwater from "../../assets/images/smartwater.jpg";
import Smartwell from "../../assets/images/smartwell.jpg";
import Vertushka from "../../assets/images/vertushka.jpg";
import Smartchannel from "../../assets/images/smartchannel.jpg";

const data = [Smartwater, Smartwell, Vertushka];

const productData = [
  {
    title: "Smart Well",
    description:
      "Quduqlarda suv sho’rlanishini o'lchash va suv sathini hisoblash imkoniyatiga ega.",
    image: Smartwell,
    link: "Batafsil",
  },
  {
    title: "Vertushka",
    description: "Suv oqimi tezligi va sathini o'lchash imkoniyatiga ega.",
    image: Vertushka,
    link: "Batafsil",
  },
  {
    title: "Smart Channel",
    description:
      "Smart channel - bu aqlli suv o’lchash qurilmasi bo’lib asosan kichik kanallardagi suv sarfini o’lchash uchun mo’ljallangan.",
    image: Smartchannel,
    link: "Batafsil",
  },
];

function ProductInfo() {
  const [imageChange, setImageChange] = useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        padding: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          variant="elevation"
          elevation={4}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-around",
            padding: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 120,
                marginRight: 2,
              }}
            >
              {data.map((item, index) => {
                return (
                  <img
                    style={{
                      width: "120px",
                      height: "130px",
                      marginBottom: "5px",
                    }}
                    key={index}
                    src={item}
                    alt={index}
                    onClick={() => setImageChange(index)}
                  />
                );
              })}
            </Box>

            <Box>
              <img
                style={{
                  width: "405px",
                  height: "405px",
                }}
                src={data[imageChange]}
                alt="Product Image"
              />
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: 3,
              width: 500,
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: 34,
                fontWeight: "bold",
                marginBottom: 1,
                color: "rgb(1, 154, 204)",
              }}
            >
              Smart Water
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "500",
                letterSpacing: 1.1,
              }}
              component="p"
            >
              Smart Water SW20 ochiq kanallar va daryolarda suv sathini o'lchash
              va sekundiga suv hajmini hisoblash imkoniyatiga ega. Ma'lumotni
              serverga onlayn o'tkazish uchun GSM moduli o'rnatilgan. Smart
              Water SW20 har qanday quvvat manbaidan mutlaqo mustaqil ishlaydi,
              chunki u quyosh batareyasi va qayta zaryadlanuvchi batareyaga ega.
              Smart Water SW20 to'g'ri ishlashi uchun uni to'g'ri o'rnatish va
              2G ulanishi bilan ishlaydigan SIM kartani qo'yish kerak. Smart
              Water SW20 quyidagi xususiyatlarga ega:
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: 3,
              width: 400,
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: 34,
                fontWeight: "bold",
                marginBottom: 1,
                color: "rgb(1, 154, 204)",
              }}
            >
              Texnik Tavsifi
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "500",
              }}
              component="p"
            >
              <li>2G modem o'rnatilgan</li>
              <li>Quyosh batareyasida o'rnatilgan</li>
              <li>GNSS yoqilgan</li>
              <li>Bluetooth 3 yoqilgan</li>
              <li>
                Ultrasonik datchik maksimal 10m diapazoni va mm o'lchamlari
                bilan
              </li>
              <li>
                Paketga 3 ta M5 8 mm muruvvat, 6 vintli 2,5 mm olti burchakli
                burama vintlar, quyosh batareyasi o'rnatilgan yuqori va kichik
                korpus, tenglikni, batareya to'plami, ultratovushli datchik va
                ulagich, zanglamaydigan po'lat quvurlar, foydalanuvchi
                qo'llanmasi kiradi.
              </li>
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 3,
          color: "rgb(1, 154, 204)",
        }}
      >
        O'xshash maxsulotlar
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        {productData.map((item, index) => (
          <Paper
            variant="outlined"
            elevation={4}
            sx={{
              width: 450,
              padding: 1,
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              marginLeft: 2,
            }}
            key={index}
          >
            <Box
              sx={{
                width: 270,
                height: 200,
              }}
            >
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt={index}
              />
            </Box>

            <Box
              sx={{
                width: 150,
              }}
            >
              <Typography
                component="h4"
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "rgb(1, 154, 204)",
                  marginBottom: 1,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      <Index />
    </Box>
  );
}

export default ProductInfo;
