import React from 'react';

import logo from './logo.svg';

import NewsList from './components/NewsList'
import OurProductAd from './components/OurProductAd'
import SearchBlock from './components/SearchBlock'
import ImageAd from './components/ImageAd'
import Widgets from './components/Widgets'

function App() {
  return (
    <>
      <div className="row">
        {/*
          NewsList      - Блок, в котором будет выводиться список новостей за определенное время
          OurProductAd  - Реклама какого-либо продукта компании
        */}
        <NewsList data={}/>
        <OurProductAd/>
      </div>
      <div className="row">
        {/*
          SearchBlock - Основной блок поиска
        */}        
        <SearchBlock/>
      </div>
      <div className="row">
        {/*
          ImageAd - Сторонняя реклама
        */}
        <ImageAd/>
      </div>
      <div className="row">
        {/*
          Widgets - Список виджетов
        */}
        <Widgets/>
      </div>
    </>
  );
}

export default App;
