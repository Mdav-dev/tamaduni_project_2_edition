import { useState, useEffect } from "react"


function Nav_link(props){	
	const [styling, setStyling] = useState(false)
	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	
	
	function HandleOnClick(){

	}
	var check = false;
	function HandleOnHover(){
		setStyling(true);
	}
	function HandleOnOut(){
		setStyling(false);
	}
	

	const box = {
		border: "1px solid #000",
		padding: "10px",
		background:styling?"white":"black",
		cursor: "pointer"
		

	}
	const paragraph = {
		margin: "0",
		color:styling?"black":"white",
		fontSize:mobile?"13px":"",
	}	

	return(
		<span onMouseOver={HandleOnHover} onMouseOut={HandleOnOut} style={box}>
			<p style={paragraph}>
				{props.name}
			</p>
		</span>
	)
}
export default Nav_link;