import ImageHome from "../Image_home";
import Nav_link from "./nav_link";
import Afro_card from "../AfroCelebration/Afro_card";
import Nav_link_container from "./nav_link_container";
import Map from "./Map";
import {FaBars} from "react-icons/fa";
import Synopsis from "./Synopsis";
import { MdSearch } from "react-icons/md";
import Footer from "../Footer";
import Particulars from "./Particulars";
import Stats from "./Stats";
import Flag_card_container from "../AfroCelebration/flag_card_container";
import Particulars_Card from "./Particulars_Card";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";

function Cultural_mapping(props){
	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	const container = {
		display: "flex",
		flexDirection: "column"
	}
	const heading = {
		display: "flex",
		flexDirection: "column",
		width: "100%"
	}
	const file_header = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: "2%",
		paddingRight: "2%",
		
	}
	
	const sub_container = {
		display: "flex",
		flexDirection:mobile?"column":"" ,
		justifyContent: "space-betwwen",
		height:mobile?"":"100vh",
	}
	const synopsis_container = {
		flex: "1",

	}
	const location = {
		border: "1px solid #000",
		marginLeft: "5px",
		marginRight: "5px",
		height: "30vh",

	}
	
	const display_content = {
		flex: "3",
		

	}
	const search_bar = {
		display: "flex",
		justifyContent: "center",
		height:mobile?"6vh":"10vh",
	}
	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
		"width":"100%",
		"overflowX":"auto",
		"whiteSpace":"nowrap",

	}

	var check = false;

	const det = "Institution that collects,	preserves, displays, and interprets objects,"+
	 " artifacts, or specimens of"+
	" cultural, historical,"+
	" scientific, or artistic"+
	" significance for the public"+
	" to view and learn from.";

	const menu_bars = {
		a:{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			marginLeft:mobile?"35px":"",
		},
		b:{
			width: "25px",
			height: "25px"
		}
	}
	const title = {
		"fontFamily":"cursive",
		"fontWeight":"600",
		"fontStyle":"normal",
		fontSize:mobile?"17px":"",
		marginLeft:mobile?"0":"",
		paddingLeft:mobile?"0":"",
		
		
	}
	const logo = {
		width:mobile?"90px":"",
		height:mobile?"90px":"",
	}
	const sub_menu = {
		display: "none",
	}

	const [sidebar, setSidebar] =useState(false);

	function handleOnclick(){
		setSidebar(!sidebar)
	}
	



	return (
		<div style={container}>
			<div style={heading}>
				<div style={file_header}>
					<div>
						<a href="/#"><ImageHome 
							class="logo"
							style={logo}
							ImgSrc="/Images/tamaduni_logo.png" 
							alt="Logo Image"						
							/></a>
					</div>
					<div><h1 style={title}>CULTURAL MAPPING</h1></div>
					<div onClick={handleOnclick} style={menu_bars.a}><FaBars style={menu_bars.b}/></div>
				</div>
				<Sidebar toggle = {sidebar}
				ClickIt = {handleOnclick}
				side = "right" />
				<div style={{...particulars}}> 
					<div style={sub_menu}></div>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
				</div>
			</div>
			<div style={sub_container}>
				<div style={synopsis_container}>
					<div style={search_bar}>					
						<input
							style={{
								border: "2px solid #000", 
								borderRadius: "7%", 
								height:mobile?"30px":"40px",
								width: "200px",
								margin: "5px",
								}} 
							placeholder="Search"
							value="search"
						/>					
						<div 
							style={{
								height:mobile?"30px":"40px",
								width:"40px", 
								border: "2px solid #000",
								borderRadius: "10%",
								margin: "5px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								}}>
							<MdSearch style={{width:mobile?"25px":"30px", height:mobile?"25px":"30px"}} />	
						</div>								
					</div>
					{mobile?"":<div style={location}></div>}
					<Synopsis synopsis_heading= "Museum"
						content= {det}
					/>
					{mobile?"":<Stats />}

				</div>
				<div style={display_content}>
					
					{check?(<Map />):(
					<Particulars 
						heading="Museum"
						category="Heritage places"
						card= {Particulars_Card} 
						/>)}				 
				</div>
				{mobile?<div style={location}>GPS Location</div>:""}
			</div>			
			<Footer />

		</div>
	)

}
export default Cultural_mapping;