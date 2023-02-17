import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import NavBar from '../components/NavBar';
const Sports = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://developer-times-project-backend-six.vercel.app/api/sport');
        console.log('completed')
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  function Card({ title, description, url, imageUrl }) {
    return (
      <div className="card">
        <img src={imageUrl} alt={title}  style={{height:"15rem"}}/>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <a className="card-link" href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavBar/>
    <div className="news" >
      {news.map((article, index) => (
        <Card 
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          imageUrl={article.urlToImage}
          
        />
      ))}
    </div>
    
    </>
  );
};

export default Sports;