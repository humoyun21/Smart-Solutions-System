import React, { useState } from 'react';
import { Row, Col, Card, Modal } from 'antd';
import ReactPlayer from 'react-player';

import suvombor from "../../assets/images/suvombor.png";
import './style.scss';

const videos1 = [
  { url: 'https://youtu.be/RbTXkyfnN-Q?si=aZIz5ny8KxrP2gTL', size: "large" },
  { url: 'https://youtu.be/0Ov0bxCBQdM?si=B_Sk6jgpWlXaG62C', size: "small" },
  { url: 'https://youtu.be/KmYBFeRtJiU?si=GfHmkq1l4ivS2JhT', size: "small" },
  { url: 'https://youtu.be/_IcbaGkdP0s?si=znTG_Pudag43bo7g', size: "large" },
  { url: 'https://youtu.be/OQIjjNkmznY?si=fQdGK1lyeY-RvTHb', size: "small" },
];

const videos2 = [
  { url: 'https://youtu.be/8sWXPZd8P3I?si=_jBgrFbuUARkFYgT', size: "small" },
  { url: 'https://www.youtube.com/watch?v=gkSBAKUqhqs', size: "large" },
  { url: 'https://www.youtube.com/watch?v=OIUTQeYyyy0', size: "small" },
  { url: 'https://www.youtube.com/watch?v=-vUiscjMQNE', size: "small" },
  { url: 'https://www.youtube.com/watch?v=feYodaCJjfY&t=4s', size: "large" },
];



const videos3 = [
  { url: 'https://www.youtube.com/watch?v=OBQUIvUSc74', size: "large" },
  { url: 'https://www.youtube.com/watch?v=zx-SzcFaeeA', size: "small" },
  { url: 'https://www.youtube.com/watch?v=VPw2g2zpeOk', size: "small" },
  { url: 'https://www.youtube.com/watch?v=AXOEeI5ZpRc&t=4s', size: "large" },
  { url: 'https://www.youtube.com/watch?v=rIiSBT_zjqI', size: "small" },
];
const cardSizeMap = {
  large: { width: 340, height: 200 },
  small: { width: 250, height: 200 },
};

function Videos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const showModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentVideo(null);
  };

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
    
  
    <div className='videos'>
      <h1>Vedeolar</h1>

      <div className='videos-wrap'>
        <Row gutter={[5, 5]}>
          {videos1.map((video, index) => (
            <Col key={index}>
              <Card
                cover={
                  <div onClick={() => showModal(video.url)}>
                    <ReactPlayer
                      url={video.url}
                      width={cardSizeMap[video.size].width}
                      height={cardSizeMap[video.size].height}
                      light={true} // This makes the player show the thumbnail until clicked
                    />
                  </div>
                }
                bordered={false}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className='videos-wraps'>
        <Row gutter={[5, 5]}>
          {videos2.map((video, index) => (
            <Col key={index}>
              <Card
                cover={
                  <div onClick={() => showModal(video.url)}>
                    <ReactPlayer
                      url={video.url}
                      width={cardSizeMap[video.size].width}
                      height={cardSizeMap[video.size].height}
                      light={true}
                    />
                  </div>
                }
                bordered={false}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className='videos-wrap'>
        <Row gutter={[5, 5]}>
          {videos3.map((video, index) => (
            <Col key={index}>
              <Card
                cover={
                  <div onClick={() => showModal(video.url)}>
                    <ReactPlayer
                      url={video.url}
                      width={cardSizeMap[video.size].width}
                      height={cardSizeMap[video.size].height}
                      light={true}
                    />
                  </div>
                }
                bordered={false}
              />
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        title="Video Player"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800} // Adjust the size of the modal if necessary
      >
        {currentVideo && (
          <ReactPlayer url={currentVideo} width="100%" controls playing />
        )}
      </Modal>
    </div>
    </>
  );
}

export default Videos;
