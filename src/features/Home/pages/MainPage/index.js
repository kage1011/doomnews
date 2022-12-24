import React from 'react';
import './style.scss';
import { Col, Row } from 'antd';
import NewsCard from '../../components/NewsCard'

function MainPage() {
    const PostsData = [
        {
            "id": "1",
            "title": "Wild Rift patch 4.0 preview: Zeri and Zoe release, inhibitor respawns, more",
            "text": "News 1 detail",
            "image": "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F12%2F23%2FUntitled-design-17.jpg&w=640&q=7"
        },
        {
            "id": "2",
            "title": "Inhibitor respawns and turret burns",
            "text": "Learn our tips and tricks on living a nomadic lifestyle",
            "image": "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F12%2F23%2FUntitled-design-18-1-1024x576.jpg&w=1200&q=75"
        },
        {
            "id": "3",
            "title": "React and the WP-API",
            "text": "The first ever decoupled starter theme for React & the WP-API",
            "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
        },
        {
            "id": "4",
            "title": "CNN Acquire BEME",
            "text": "CNN purchased Casey Neistat's Beme app for $25million.",
            "image": "https://source.unsplash.com/user/erondu/600x400"
        },
        {
            "id": "5",
            "title": "CNN Acquire BEME",
            "text": "CNN purchased Casey Neistat's Beme app for $25million.",
            "image": "https://source.unsplash.com/user/erondu/600x400"
        },
    ]


    return (
        <div className='homeLayout'>
            <Row justify="start" gutter={[24, 24]}>
                {PostsData.map((x, index) => {
                    return (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <NewsCard title = {x.title} image = {x.image} text ={x.text}  newsId ={x.id}/>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default MainPage;