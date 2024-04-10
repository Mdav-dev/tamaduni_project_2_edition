import { BsBank } from "react-icons/bs";
import { useState, useEffect } from "react";

function Synopsis(props){
	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	const synopsis = {
		border: "1px solid #000",
		margin: "5px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height:mobile?"30vh":"40vh",
	}
	const a = {
		margin: "3px",
		fontSize:mobile?"18px":"",
	}
	
	const b = {
		display: "flex",
		alignItems: "flex-end",	
	}
	const c = {
		width: "30px", 
		height: "30px", 
		margin: "5px"
	}
	const d = {
		textDecoration: "underline"
	}
	const e ={
		margin: "5px",
		fontSize:mobile?"18px":"",
}
	const f = {
		margin: "10px", 
		fontWeight:"bold", 
		fontSize:mobile?"12px":"",
	}

	return(
		<div style={synopsis}>
			<h3 style={a}>SYNOPSIS</h3>
			<div style={b}>
				<BsBank style={c}/>
				<span style={d}><h4 style={e}>{props.synopsis_heading}</h4></span>
			</div>
			<div>
				<p style={f}>{props.content}</p>
			</div>
		</div>
	)

}
export default Synopsis;