import React from 'react'

const Row = props => /*Картинка если есть, текст, маленький текст*/

function WidgetList(props) {
	/*
		Вывод заголовка и текста в виде списка
	*/
	return (
		<div className="widget">
			<h2 className="title">{props.title}</h2>
			<ul className="list">
				{props.data-list.map(row => <Row {...row} key={row.id}/>)}
			</ul>
		</div>
	)
}

export default WidgetList