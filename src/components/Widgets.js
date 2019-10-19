import React from 'react';

import Weather from './components/Weather'
import WidgetList from './components/WidgetList'


function Widgets(props) {

  return(
    /*
      Подключение виджетов
    */
    <div className="widget-section">
      <Weather city={city}/>
      <WidgetList title="Посещаемое" data-list={data}/>
      <WidgetList title="Телепрограмма" data-list={data}/>
      <WidgetList title="Карта Германии" data-list={data}/>
      <WidgetList title="Эфир" data-list={data}/>
    </div>
  )
}

export default Widgets