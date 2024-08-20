import React, { useState } from 'react';
import { Container, Typography, Card, CardMedia, Box, Grid } from '@mui/material';

import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

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
        <>
            <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: "rgb(1, 154, 204)" }}>
                    Rad etilgan rezonansli qonun, YHXBning maslahati va qamoqdagi sobiq vazirlar - hafta dayjesti
                </Typography>

                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet magni accusantium ex odio ipsam. Consectetur, necessitatibus quibusdam numquam aut beatae commodi dolor? Iste laudantium rem ullam consequatur consequuntur accusamus commodi obcaecati sed perspiciatis assumenda quo sint minima animi repudiandae, recusandae omnis libero exercitationem sapiente atque illum nesciunt voluptate. Explicabo assumenda vitae magni? Architecto harum, tempora asperiores odit magnam officia aut inventore est consequatur blanditiis corporis laboriosam laudantium, vero laborum maiores! Voluptate rerum minima delectus tenetur unde. Aliquam voluptates quaerat, accusantium a, error explicabo, expedita minus incidunt recusandae pariatur sint similique fugiat illum vitae doloremque enim numquam dolor. Labore dignissimos molestias accusamus sequi non quis nobis tempore autem illo quasi? Enim voluptas, nemo ratione consequuntur, facere a laboriosam reprehenderit fugiat fugit necessitatibus accusantium ipsam eos minus dignissimos aliquid? Quasi commodi reprehenderit repellat, voluptatum inventore optio repellendus quae veritatis consectetur perspiciatis vitae tempore totam non ad eius voluptas laudantium. Modi, fuga expedita.
                </Typography>

                <Card sx={{ marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={topImage} // Use the state for the image URL
                        alt="Background Image"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <img src={topImage} alt="Selected Image" />
                    </Box>
                </Card>

                <Typography variant="h6" component="h2" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim necessitatibus vitae temporibus itaque ullam. Voluptatibus adipisci enim facilis ipsa facere recusandae amet doloribus animi alias ipsam, molestias dicta corporis assumenda fuga soluta impedit tempore ratione sunt dolorem! Obcaecati nemo ad vero voluptas. Voluptatibus vitae dolorem repellat eaque explicabo fugiat aperiam numquam assumenda dignissimos autem fugit eos odit voluptatum obcaecati unde doloribus quod illum, quos animi praesentium eius magnam quo iste. Quod, delectus reiciendis commodi sit inventore voluptatibus, nobis nisi repudiandae rerum, repellendus quas corporis ipsam optio numquam omnis consequatur quo amet ad magni porro. Quis unde amet quam fuga. Labore rem veritatis ducimus nisi atque, dignissimos accusamus necessitatibus aut voluptatum asperiores libero tenetur enim pariatur eligendi aperiam maiores non tempora cupiditate aliquid. Vero quisquam dolorum modi incidunt, odio exercitationem autem obcaecati adipisci, commodi in ab natus at veritatis dignissimos. Aspernatur perferendis atque ea eligendi voluptas unde obcaecati fugit optio soluta.
                </Typography>

                <Typography variant="body1" paragraph>
                    Ochiqlik siyosatiga qarshi “no photo, no video” qonunini o‘tkazish bo‘yicha Ichki ishlar vazirligining...
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight="bold" marginBottom={5} sx={{ color: "rgb(1, 154, 204)" }}>
                            Mavzuga oid
                        </Typography>
                    </Grid>
                </Grid>
                </Container>

                {/* News Section */}
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
