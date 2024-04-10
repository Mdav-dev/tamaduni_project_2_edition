import React, { useState } from "react"
import NavLink from "./minor_components/navLink";
import {FaBars, FaTimes} from "react-icons/fa"
import { FcUndo } from "react-icons/fc";


function Sidebar(props){
	const [over, setOver] = useState(false);

	function HandleHover(){
		setOver(true);
	}
	function HandleOut(){
		setOver(false);
	}
	function Click()	{
		props.ClickIt()
	}

	const tt = props.toggle;
	var positionLeft = "";
	var positionRight = "";
	const placement = props.side;
	if(placement=="left"){
		if(tt){
			positionLeft = "0";
			positionRight = "";
		}else{
			positionLeft = "-100%";
			positionRight = "0";
		}

	}else{
		if(tt){
			positionLeft = "";
			positionRight = "0";
		}else{
			positionLeft = "";
			positionRight = "-100%";
		}	
	}
		

	const nav_container = {
		position: "fixed",
		top: "0",
		left: positionLeft,
		right: positionRight,
		width: "250px",
		height: "100vh",
		background: "rgba(253, 219, 255)",
		display: "flex",
		flexDirection: "column",
		color: "black",
		alignItems: "center",
		transition: "750ms",
		zIndex: "999",

	}
	const logo = {
		width: "100px",
	}
	const icon = {
		width: "70px",
		marginBottom: "0",
	}
	const times = {
		background: over?"red":"",
		height:"50px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color:over?"white":"",
	}
	const navigationLinks = {
		width: "100%",
		display: "flex",
		flexDirection: "Column"
		
	}


	return(
	<div style={nav_container}>
		<img style={logo} src="Images/tamaduni_logo.png" alt="logo"/>
		<div style={times} onMouseOver={HandleHover} onMouseOut={HandleOut} onClick={Click}>
			<FaTimes style={icon}/>
		</div>
		<nav style={navigationLinks}>
			<NavLink link = "/" target="Home" />
			<NavLink link = "/cultural_mapping" target="Cultural Mapping" />
			<NavLink link = "/afro_celebration" target="Afro Celebration"/>
			<NavLink link = "/about" target="About Us"/>
			<NavLink link = "/team" target="Our Team"/>

			
		</nav>		
	</div>
	)
}
export default Sidebar;