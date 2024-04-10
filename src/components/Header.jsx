// import React from "react";
import ImageHome from "./Image_home";
import {  Heading, Button } from 'rebass'
import CButton from "./minor_components/CButton";
import {FaBars, FaTimes} from "react-icons/fa"
import { useState, useEffect } from "react";




function Header(props){
	

	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 
	   

	const customStyle = {
		background: "",
		display:"flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		height: "100%",		
	}
	const custom = {
		background: "",
		display:"flex",
		flexDirection: "column",
		width:mobile? "120px": "200px",
		justifyContent: "center",
		alignItems: "center"
	}
	const siteTitleNameStyling = {
		fontFamily: "cursive",
		fontSize: mobile?"15px":"30px",
		fontWeight: mobile?"normal":"bold",
		background: "linear-gradient(to right, #642b73, #c6426e)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block"
	}
	const header_file = {
		paddingBottom:mobile?"10px":"",
	}
	const header = {
		width: "100%"

	}
	const header_btns = {
		width:mobile?"100px":"",

	}
	function handleClick(){
		props.buttonClick();
	}

	const menu_b ={
		width: "50px",
	}




	
	return(
		<div className="header_file" style={header_file}>
			<div style={header} className="header">
				<div style={custom}>
					<ImageHome 
					class="logo"
					ImgSrc="/Images/tamaduni_logo.png" 
					alt="Logo Image"
					/>
					<span onClick={handleClick} className = "menu_bars">
						<FaBars style={menu_b}/>
					</span>
					{/* <span onClick={handleClick}
					class="material-icons-outlined menu_bar">Menu</span> */}
				</div>
				<div style={siteTitleNameStyling}>{props.title}</div>
				<div style={header_btns} className="header_btns">
					<CButton link="/login" name="Login" />
					<CButton link="/sign_up" name="Sign Up" />
				</div>
			</div>
		</div>
	)
}

export default Header;