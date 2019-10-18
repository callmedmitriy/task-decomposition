import React from 'react';

function Menu(props) {

  return(
    /*
      список ссылок в меню
    */
    <div className="links-list">
      {props.links.map(link => <a href={link.url}>{link.name}</a>)}
    </div>
  )
}

export default Menu