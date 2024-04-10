import React, { useState } from 'react'

function NavLink(props) {
	const [over, setOver] = useState(false);

	function HandleHover(){
		setOver(true);
	}
	function HandleOut(){
		setOver(false);		
	}

	const list = {
		a:{listStyleType: "none",
			background: over?"#758398":"#75839800",
			paddingTop: "25px",
			paddingBottom: "25px",
			paddingLeft: "20%",
			paddingRight: "20%",
			width: ""
			
		},

		b:{textDecoration: "none",
			color: over? "#f0000":"#000",
			fontSize: "1.2rem",
			fontFamily:"\"Courgette\", cursive",
			fontWeight:"400",
			fontStyle:"normal",
			
		
		},
	}
  return (
	// <li onMouseOver={HandleHover} 
	// onMouseOut={HandleOut} 
	// style= {list.a}>
	// <a style={list.b} href={props.link}>{props.target}</a>
	// </li>
	<a onMouseOver={HandleHover} 
	onMouseOut={HandleOut} 
	href={props.link}
	style= {list.b}>
	<li style={list.a} >{props.target}</li>
	</a>

  )
}

export default NavLink;
