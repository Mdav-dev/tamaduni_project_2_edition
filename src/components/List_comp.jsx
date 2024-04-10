import React from "react";

function List(props){
	const customStyle={
		width: "",
		opacity:"1",
		transform:" translateX(-200px) rotate(-90deg)",
	}
	
	return <li style={customStyle}><a href={props.link}>{props.pageName}</a></li>
}
export default List;