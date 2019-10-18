import React from 'react';

import Logo from './Logo.svg'
import Menu from './Menu'
import SearchForm from './SearchForm'

function SearchBlock(props) {

  /*
    Блок формы поиска, включающий в себя меню над строкой поиска, и пример запроса под строкой поиска,
    а также логотип компании
  */  

  return(
    <div className="searchblock">
      <div className="searchblock-row">
        <Menu links={}/>
      </div>
      <div className="searchblock-row">
        <Logo/>
        <SearchForm/>
      </div>
      <div className="searchblock-row">
        /* Рандомная поисковая фраза */
      </div>
    </div>
  )
}

export default SearchBlock