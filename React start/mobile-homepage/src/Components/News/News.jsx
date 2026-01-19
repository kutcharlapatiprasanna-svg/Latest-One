import React from 'react';
import news from '../../assets/news_image.png'
import './News.css';

const News = () => {
    return (
        <div className='news-reporter'>
            <h1>Support & Resources</h1>
            <img src={news} alt='newss' />
            <h1>News & Press Releases</h1>
            <p>Catch up on the latest company
                and industry news</p>
            <button>Learn More</button>
        </div>
    );
}

export default News;
