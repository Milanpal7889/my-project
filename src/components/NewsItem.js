import React from 'react';
import './components.css';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
  return (
    <div className="flex justify-center">
      <div className="lg:max-w-sm md:max-w-md md:h-auto rounded overflow-hidden shadow-lg m-5 h-fit text-xl">
        <img className="w-full h-60" src={imageUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="text-center font-bold text-xl mb-2 h-14 overflow-hidden line-clamp-2">
            {title}
          </div>
          <p className="text-center text-gray-700 text-base mt-4 h-24 overflow-hidden line-clamp-4">
            {description}
          </p>
        </div>
        <div className='text-center text-slate-400'>
          <p className='text-sm'>
            by <span className='font-bold'>{author}</span> on <span className='font-bold'>{new Date(date).toLocaleDateString() }</span>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <a href={newsUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              Read more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
