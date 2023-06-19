import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import arrow from '../assets/arrow.svg';
import { Article } from './Article';

export const Articles = () => {
  const { articlesList } = useContext(DataContext);

  return (
    <div className='articles-container'>
      <header className='articles-header'>
        <h3 className='articles-header-title'>Articles</h3>
        <button className='articles-header-button'>
          <img src={arrow} alt='arrow' />
        </button>
      </header>
      <div>
        {articlesList.map((item) => {
          return (
            <Article
              icon={item.icon}
              title={item.title}
              color={item.color}
              image1={item.user1}
              image2={item.user2}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};