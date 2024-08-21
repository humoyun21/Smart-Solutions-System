import React, { useState } from 'react';
import { Container, CardContent, Typography, Card, CardMedia, Box, Grid } from '@mui/material';

import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";
import Piezometr from "../../assets/images/piezometr.jpg";
import Smartchannel from "../../assets/images/smartchannel.jpg";
const newsItems = [
    {
        title: "Maslahat uchrashuvini o'zgartirish taklifi, Parijdagi rekord va antimonopoliya konsepsiyasi - hafta dayjesti",
        
        image: Tashkent,
    },
    {
        title: "Bojlarni qaytarish taklifi, yangilangan parlament va ikkinchi abituriyentlar - hafta dayjesti",
      
        image: Germanya,
    },
    {
        title: "“Open” kartalari bilan istalgan xarid uchun imkoniyat bor!",
        image: Tashkent,
    },
    {
        title: "Chery avtomobilini O’zbekistondagi rasmiy dilerlardan sotib olishning ahamiyati",
        image: Xorazm,
    },
    {
        title: "“Open” kartalari bilan istalgan xarid uchun imkoniyat bor!",
        image: Tashkent,
    },
    {
        title: "Chery avtomobilini O’zbekistondagi rasmiy dilerlardan sotib olishning ahamiyati",
        image: Xorazm,
    },
    // Add more news items as needed
];

const ArticlePage = () => {
    // State to hold the image URL for the top card
    const [topImage, setTopImage] = useState(Tashkent);

    // Event handler to handle card click
    const handleCardClick = (image) => {
        setTopImage(image);
    };

    return (
        <>  <Container maxWidth="1200px" sx={{ marginTop: 7 }}>
        <Grid container spacing={4}>
            {/* Chap Tomonidagi Matn */}
            <Grid item xs={12} md={9}>
                <Card sx={{ backgroundColor: "#f5f5f5" }}>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ color: "rgb(1, 154, 204)" }}>
                            Rad etilgan rezonansli qonun, YHXBning maslahati va qamoqdagi sobiq vazirlar - hafta dayjesti
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet magni accusantium ex odio ipsam. Consectetur, necessitatibus quibusdam numquam aut beatae commodi dolor? Iste laudantium rem ullam consequatur consequuntur accusamus commodi obcaecati sed perspiciatis assumenda quo sint minima animi repudiandae, recusandae omnis libero exercitationem sapiente atque illum nesciunt voluptate. Explicabo assumenda vitae magni? Architecto harum, tempora asperiores odit magnam officia aut inventore est consequatur blanditiis corporis laboriosam laudantium, vero laborum maiores! Voluptate rerum minima delectus tenetur unde. Aliquam voluptates quaerat, accusantium a, error explicabo, expedita minus incidunt recusandae pariatur sint similique fugiat illum vitae doloremque enim numquam dolor. Labore dignissimos molestias accusamus sequi non quis nobis tempore autem illo quasi? Enim voluptas, nemo ratione consequuntur, facere a laboriosam reprehenderit fugiat fugit necessitatibus accusantium ipsam eos minus dignissimos aliquid? Quasi commodi reprehenderit repellat, voluptatum inventore optio repellendus quae veritatis consectetur perspiciatis vitae tempore totam non ad eius voluptas laudantium. Modi, fuga expedita.
                        </Typography>
                    </CardContent>
                </Card>

                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={Piezometr}
                                alt="Piezometr Image"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={Smartchannel}
                                alt="Smartchannel Image"
                            />
                        </Card>
                    </Grid>
                </Grid>

                <Card sx={{ backgroundColor: "#f5f5f5", marginTop: 2 }}>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia placeat voluptas excepturi ipsum consequatur sint iste. Ab, dolorum, repellat quaerat dignissimos tempore vitae illo quod ad perferendis cum doloribus asperiores dolorem quo commodi enim voluptatibus quam expedita sed debitis impedit? Et, ipsum dolore voluptatem enim nesciunt magnam consequuntur corporis nemo sint numquam! Aliquid repellat, ducimus expedita sunt eaque tempore architecto minima. Porro consequuntur molestias beatae facere, odit maiores quis obcaecati ex? Tempore quia ad atque temporibus recusandae corporis perspiciatis veniam impedit, doloremque sit laborum tempora odio aut molestiae fugiat cupiditate saepe maxime, commodi harum illum quam, eaque eum fugit! Impedit aspernatur necessitatibus quam eaque mollitia quae harum beatae vitae officia nemo ipsum vero placeat, illum dolorum non? Facilis ea dolores cum expedita! Eaque unde optio, consectetur numquam necessitatibus sunt at, minus quam aspernatur, porro eveniet adipisci! Cumque enim rem sint veritatis. Accusantium suscipit dolorum eum doloribus, nostrum quae aspernatur laboriosam reprehenderit praesentium nemo, ex sed reiciendis. Ullam ipsum sint autem dolore consequuntur quis doloribus unde itaque, quae quaerat nostrum velit, enim natus sit repellendus voluptas amet earum? Pariatur voluptate, voluptatem quae ducimus minima possimus similique libero error doloremque expedita eveniet sunt vero adipisci sequi atque nam mollitia fugit veniam.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Ochiqlik siyosatiga qarshi “no photo, no video” qonunini o‘tkazish bo‘yicha Ichki ishlar vazirligining...
                        </Typography>
                    </CardContent>
                </Card>

                <Typography variant="h5" fontWeight="bold" sx={{ color: "rgb(1, 154, 204)", marginTop: 4 }}>
                    Mavzuga oid
                </Typography>
            </Grid>

            {/* O'ng Tomonidagi Rasm */}
            <Grid item xs={10} md={3}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{ color: "rgb(1, 154, 204)" }}
                    >
                        Lorem ipsum dolor sit amet 
                    </Typography>

                    {/* Birinchi rasm va matn */}
                    <Card sx={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={Xorazm} // Rasm URL sini o'zgartiring
                            alt="Xorazm Image"
                        />
                    </Card>
                    <Box
                        sx={{
                            padding: '16px',
                            textAlign: 'justify',
                        }}
                    >
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quas ipsam rem dolore recusandae. Cum obcaecati, qui impedit corporis deserunt optio ducimus reiciendis facilis. Distinctio quae, nostrum eos dignissimos corrupti deserunt impedit minus atque quis eligendi nobis inventore recusandae, blanditiis eaque harum placeat, cum amet ea consequuntur officiis. Praesentium.
                        </Typography>
                    </Box>

                    {/* Ikkinchi rasm va matn */}
                    <Card sx={{ marginTop: '16px', overflow: 'hidden', height: "200px" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={Germanya} // Ikkinchi rasm URL sini o'zgartiring
                            alt="Germanya Image"
                        />
                    </Card>
                    <Box
                        sx={{
                            padding: '16px',
                            textAlign: 'justify',
                        }}
                    >
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui modi, quo commodi provident repudiandae cupiditate molestiae possimus. Nemo enim consequatur sit inventore praesentium, quas laboriosam laborum blanditiis repellendus, omnis sapiente tempora similique consequuntur. Ratione placeat numquam nemo aut laborum? Dolorum unde non, earum, dignissimos sed ad veniam sit veritatis vero voluptatum quis velit, sunt placeat hic. Quo animi soluta alias autem doloribus impedit dolores debitis, sed magni necessitatibus nostrum pariatur cumque ratione possimus! Ad itaque accusantium delectus, eum ullam labore voluptates ex ipsam totam cumque non aspernatur unde eligendi libero dicta quam quasi voluptatum et rerum quis tempore veniam.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Container>
                <div className="cards">
                    {newsItems.map((card, i) => (
                        <div
                            key={i}
                            className="cards-wrap"
                            onClick={() => handleCardClick(card.image)}
                        >
                            <div className="card-content1">
                                <h2>{card.title}</h2>
                                <p>{card.time}</p>
                            </div>
                            <img src={card.image} alt={card.title} />
                        </div>
                    ))}
                </div>
        </>

       
    );
};

export default ArticlePage;
