import React from 'react';

import News from './News'
import StockQuote from './StockQuote'

function NewsList(props) {
    /*
      Отображение заголовков, списка новостей, списка биржевых котировок
    */
  return(
    <div className="newslist-wrapper">
      <div className="newslist-header">
        <div className="title">{props.title}</div>
        <div className="city">{props.city}</div>
        <div className="date">{date}</div>
      </div>
      <div className="news-list">
        {props.data.map(news => <News {...news} key={news.id}/>)}
      </div>
      <div className="stockquotes-list">
        {props.data.map(quote => <StockQuote {...quote} key={quote.id}/>)}
      </div>
    </div>
  )
}

export default NewsList