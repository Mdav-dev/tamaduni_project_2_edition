import React, {useState, useEffect} from "react";
import ImageHome from "./Image_home";
import List from "./List_comp";
import P from "./minor_components/pa";

function Footer(){

	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	const date = new Date();
	const current_year = date.getFullYear()

	const customStyle = {
		fontSize: "20px",
		fontWeight: "bold",
		background: "#000", //"linear-gradient(to right, #642b73, #c6426e)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block",
		
	}
	const footer = {
		flexDirection:mobile?"column":"",
		justifyContent:mobile?"flex-start":""
	}
	const footer_sect = {
		marginBottom:mobile?"0":"",
		marginTop: mobile?"0":"",
	}
	const hr = {
		borderTop: "2px solid #000",
	}

	return(
		<div className="footer" style={footer}>		
			<div className="footer_sect" style={footer_sect}>
				<ImageHome 
				class="logo"
				ImgSrc="/Images/tamaduni_logo.png" 
				alt="Logo Image"
				/>			
				<span>			
					<ImageHome 
					class="copyright"
					ImgSrc="/Images/copyright_black_24dp.svg" 
					alt="Logo Image"
					/><span> {current_year}</span>
					<span style={customStyle}> tamaduni</span>
				</span>
			</div>
			{mobile?<hr style={hr}/>:""}
			<div className="footer_sect" style={footer_sect}>
				<h3>Social</h3>
				<P detail="Instagram" />
				<P detail="Youtube" />
				<P detail="Twitter" />
				<P />
				
			</div>
			<div className="footer_sect" style={footer_sect}>
				<h3>Menu</h3>
				<P detail="Afro-Celebration" link="/afro_celebration"/>
				<P detail="Culture Mapping" link="/cultural_mapping"/>
				<P detail="Contact Us" link="/"/>
			</div>
			<div className="footer_sect" style={footer_sect}>
				<h3>Legal</h3>
				<P detail="Terms and Conditions" />
				<P detail="Licence"/>
				<P detail="Contact"/>

			</div>
		</div>
	)
	
}
export default Footer;