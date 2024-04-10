import React, { useState } from "react";

function P(props){
	const [colorr, setColorr] = useState(false);


	const customStyle = {
		fontFamily: "'Roboto', sans-serif",
		fontSize: "16px",
		color: colorr?"#BDB76B" : "#000",
		cursor: colorr?"pointer": "default",
		marginBottom: "10px",
		fontWeight: "800",		
	}
	const linkStyle = {
		textDecoration: "none",
		color: "black",
	}
	function handleHover(){
		setColorr(true);
	}
	function handleLeave(){
		setColorr(false);
	}
	return(		
		<span style={customStyle}
		onMouseOver = {handleHover}
		onMouseLeave = {handleLeave}
		>
			<a style={linkStyle} href={props.link}>
				{props.detail}
			</a>
		</span>
	)
}
export default P;