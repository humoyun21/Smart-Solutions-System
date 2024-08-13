import React from "react";
import "./style.scss";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Images
import Yangiliklardayjesti from "../../assets/images/yangiliklardayjesti.png";
import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

// News data
const newsData = [
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "Qozogʻiston Xitoy korporatsiyalari bilan suv resurslarini boshqarish boʻyicha hamkorlik masalalarini koʻrib chiqmoqda...",
    image: Yangiliklardayjesti,
    link: "Batafsil",
    xs: 6,
    md: 6,
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "Xorazm ilmiy-tajriba stansiyasi hududida suv o'lchash va suv hisobini yuritish mavzusida ko'rgazmali...",
    image: Xorazm,
    link: "Batafsil",
    xs: 4,
    md: 3,
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "Xitoy davlatining Shanghai Panda Machinery (Group) Co.,Ltd kompaniyasi tomonidan ishlab chiqarilgan ...",
    image: Germanya,
    link: "Batafsil",
    xs: 5,
    md: 6,
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "O'zida 2500 mamlakatdan 93 nafardan ziyod ishtirokchini jamlagan III Toshkent Xalqaro Investitsiya ...",
    image: Tashkent,
    link: "Batafsil",
    xs: 5,
    md: 3,
  },
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "Qozogʻiston Xitoy korporatsiyalari bilan suv resurslarini boshqarish boʻyicha hamkorlik masalalarini koʻrib chiqmoqda...",
    image: Yangiliklardayjesti,
    link: "Batafsil",
    xs: 3,
    md: 3,
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "Xorazm ilmiy-tajriba stansiyasi hududida suv o'lchash va suv hisobini yuritish mavzusida ko'rgazmali...",
    image: Xorazm,
    link: "Batafsil",
    xs: 4,
    md: 3,
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "Xitoy davlatining Shanghai Panda Machinery (Group) Co.,Ltd kompaniyasi tomonidan ishlab chiqarilgan ...",
    image: Germanya,
    link: "Batafsil",
    xs: 4,
    md: 3,
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "O'zida 2500 mamlakatdan 93 nafardan ziyod ishtirokchini jamlagan III Toshkent Xalqaro Investitsiya ...",
    image: Tashkent,
    link: "Batafsil",
    xs: 4,
    md: 6,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NewsSection() {
  return (
    <section id="news-section">
      <Box
        sx={{
          fontSize: 18,
          fontWeight: "bold",
        }}
        component="h4"
      >
        Yangiliklar
      </Box>

      <Box
        sx={{
          marginTop: 2,
          fontSize: 24,
          color: "rgb(1, 154, 204)",
          paddingBottom: 2,
          width: 700,
        }}
        component="h5"
      >
        AMOAMIZDAGI YANGILIKLAR VA HAFTALIK YANGILIKLAR TAHLILI BILAN USHBU
        BO'LIMDA TANISHISHINGIZ MUMKIN
      </Box>

      <Box
        sx={{
          width: "100%",
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            width: 500,
            height: 450,
            padding: 1,
            marginRight: 1,
          }}
          elevation={4}
        >
          <img
            style={{
              width: "100%",
              marginBottom: 2,
            }}
            src={newsData[0].image}
            alt="News photos"
          />

          <Typography
            component="h4"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "rgb(1, 154, 204)",
              textAlign: "center",
            }}
          >
            {newsData[0].title}
          </Typography>

          <Typography
            component="p"
            sx={{
              marginTop: 2,
              fontSize: 15,
            }}
          >
            {newsData[0].description}
          </Typography>
        </Paper>

        <Paper
          sx={{
            width: 250,
            height: 450,
            padding: 1,
            marginRight: 1,
          }}
          elevation={4}
        >
          <img
            style={{
              width: "100%",
              marginBottom: 2,
            }}
            src={newsData[1].image}
            alt="News photos"
          />

          <Typography
            component="h4"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "rgb(1, 154, 204)",
              textAlign: "center",
            }}
          >
            {newsData[1].title}
          </Typography>

          <Typography
            component="p"
            sx={{
              marginTop: 2,
              fontSize: 15,
            }}
          >
            {newsData[1].description}
            <br />
            {newsData[2].description}
          </Typography>
        </Paper>

        <Box>
          <Paper
            sx={{
              width: 600,
              height: 220,
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            elevation={4}
          >
            <img
              style={{
                width: 300,
              }}
              src={newsData[2].image}
              alt="News photos"
            />

            <Box
              sx={{
                width: 280,
                marginLeft: 1,
              }}
            >
              <Typography
                component="h4"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(1, 154, 204)",
                  textAlign: "center",
                }}
              >
                {newsData[2].title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  marginTop: 2,
                  fontSize: 15,
                }}
              >
                {newsData[2].description}
              </Typography>
            </Box>
          </Paper>

          <Paper
            sx={{
              width: 600,
              height: 220,
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
            elevation={4}
          >
            <img
              style={{
                width: 300,
              }}
              src={newsData[2].image}
              alt="News photos"
            />

            <Box
              sx={{
                width: 280,
                marginLeft: 1,
              }}
            >
              <Typography
                component="h4"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(1, 154, 204)",
                  textAlign: "center",
                }}
              >
                {newsData[2].title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  marginTop: 2,
                  fontSize: 15,
                }}
              >
                {newsData[2].description}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "rgb(1, 154, 204)",
            fontSize: 24,
            marginTop: 2
          }}
        >
          Asosiy yangiliklar
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          {newsData.map((item, index) => {
            return (
              <Grid
                sx={{
                  height: "100%",
                }}
                key={index}
                item
                xs={3}
              >
                <Item>
                  <img
                    src={item.image}
                    style={{
                      maxWidth: 1000,
                      maxHeight: 380,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: "rgb(1, 154, 204)",
                      marginTop: 1,
                    }}
                    component="h4"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: 2,
                    }}
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}

export default NewsSection;
