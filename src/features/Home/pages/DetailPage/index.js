import React, { useEffect, useState } from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const { newsId } = useParams();
    const [news, setNews] = useState({})
    const PostsData = [
        {
            "id": "1",
            "title": "Wild Rift patch 4.0 preview: Zeri and Zoe release, inhibitor respawns, more",
            "text": "Though not officially out yet, Wild Rift patch 4.0 is locked in for early 2023. Included in this massive patch are Zeri and Zoe’s release, two brand new Wild Rift champions, alongside many other gameplay changes, including inhibitor respawns. Here is the full preview.Wild Rift patch 4.0 has been officially teased in the developer’s vlog, showcasing brand-new changes targeted toward evolving the Rift. Two brand new Wild rift champions, tank item revamps, and the return of ultra-rapid fire have all been revealed. Here is everything to know regarding the preview.",
            "image": "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F12%2F23%2FUntitled-design-17.jpg&w=640&q=75"
        },
        {
            "id": "2",
            "title": "Inhibitor respawns and turret burns",
            "text": "Wild Rift snowballs after the first inhibitor turret goes down, launching super minions that spawn until the game ends. And though the snowball got less extreme as the developers corrected various issues surrounding the game’s pacing, these inhibitor towers create such a massive lead for whoever destroys them because they never respawned.",
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

    function fetchNews() {
        PostsData.forEach(x => {
            if (x.id === newsId) {
                setNews(x)
            }
        })
    }
    useEffect(() => {
        fetchNews();
    }, [newsId])
    return (
        <div style={{ display: 'flex' }}>
            <div className='detailLayout'>
                <img alt={news.title} src={news.image}></img>
                <p>{news.title}</p>
                <div className='news-content'>
                    <span>{news.text}</span>
                </div>
            </div>

            <div className='detailLayout2'>
                <div className="layout-right">
                    <div className="fixed-width">
                        <div className="watch-listen-sidebar">
                            <div className="watch-listen-top-menu">
                                <h2>Watch/Listen</h2>

                                <img alt='' src="https://i.imgur.com/QrvKEVD.png" ></img>
                                <p className="news-channel-icon">BBC News Channel</p>
                                <img alt=''  src="https://imgur.com/9FV7DCa.png" />
                                <p className="radio-channel-icon">BBC Radio 5 Live</p>
                            </div>

                            <div className="will-kate-video-clip">
                                <img alt=''  src="https://ichef.bbci.co.uk/news/270/cpsprodpb/C6EE/production/_89162905_89162903.jpg" ></img>
                                <p className="will-kate-video-caption">Royal Couple's India visit gets underway</p>
                                <p className="time-caption">2:25</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;