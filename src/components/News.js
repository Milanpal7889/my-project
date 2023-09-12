import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.js';
import './components.css';
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';

const News = ({ apikey, category, page, pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageState, setPageState] = useState(1);
  const [tArt, setTArt] = useState(20);
  const [progress, setProgress] = useState(100);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async (pageNo) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${pageState}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPageState((prevPageState) => prevPageState + 1);
    setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    setTArt((prevTArt) => prevTArt + 20);
    setTotalArticles(parsedData.totalArticles ? parsedData.totalArticles : 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalArticles(parsedData.totalResults);
      setTArt(20);
      setLoading(false);
    };
    fetchData();
  }, [apikey, category, page, pageSize]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${pageState + 1}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPageState((prevPageState) => prevPageState + 1);
    setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    setTArt((prevTArt) => prevTArt + 20);
  };

  const handleLoaderFinished = (progress) => {
    setProgress(100);
  };

  return (
    <div className='container content-center mt-36 lg:mt-20'>
      <LoadingBar color='#f11946' progress={progress} onLoaderFinished={handleLoaderFinished} />

      <h1 className='font-semibold text-4xl text-center'>News Monkey - Top Headlines</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalArticles}
        loader={<Spinner />}
        className='flex flex-col justify-center items-center'
      >
        <div className='flex flex-wrap justify-around'>
          {articles.map((element) => (
            <NewsItem
              key={element.url}
              newsUrl={element.url}
              imageUrl={element.urlToImage ? element.urlToImage : 'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?pid=ImgDet&rs=1'}
              title={element.title}
              description={element.description ? element.description : 'No Description Available'}
              author={element.author ? element.author : 'Unknown'}
              date={element.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  pageSize: 20,
  category: 'general'
};

export default News;
