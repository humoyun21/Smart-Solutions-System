import "./style.scss";
import React from 'react';
import { Layout, Typography, List, Divider } from 'antd';
import { Container } from "@containers";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function Index() {
  const partners = [
    "RFbeam Microwave GmbH",
    "MaxBotix Inc",
    "Xylem (Hong Kong) Limited",
    "NEW DAXIN TECHNOLOGY CO. LIMITED",
    "DianYingPu (HK) Technology Co Ltd"
  ];

  const clients = [
    "O’zbekiston Respublikasi suv xo’jaligi vazirligi",
    "O’zbekiston Respublikasi suv xo’jaligi vazirligi huzuridagi Amu-Buxoro ITHB",
    "Qurilish Ta’mirlash MChJ",
    "Amu Buxoro ITHB",
    "Janubiy Mirzacho’l magistral kanalidan foydalanish boshqarmasi",
    "Katta Farg’ona magistral kanali boshqarmasi",
    "TIIIMSX"
  ];

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Container>
          <div>
            <Title level={2}>Kompanya haiqida</Title>
          </div>

          <Divider />

          <div>
            <Title level={3}>Kompaniya haqida</Title>
            <Paragraph>
              <Text strong>«Smart Solutions System»</Text> kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. Smart Water, Smart Well aqlli qurilmalari aynan «Smart Solutions System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 30 dan ortiq xodim ishlamoqda.
            </Paragraph>
          </div>

          <Divider />

          <div>
            <Title level={3}>Hamkorlar</Title>
            <List
              dataSource={partners}
              renderItem={item => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </div>

          <Divider />

          <div>
            <Title level={3}>Bizning mijozlarimiz</Title>
            <List
              dataSource={clients}
              renderItem={item => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </div>
        </Container>
      </Content>
    </Layout>
  );
}

export default Index;
