import { WiTime10 } from "react-icons/wi";
import { FaRegHandshake } from "react-icons/fa";
import { PiMapPinLine, PiVideo, PiImage} from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { MdPrint } from "react-icons/md";
import {FaTimes} from "react-icons/fa";
import { TbWorldStar } from "react-icons/tb";
import Particulars_Card from "./Particulars_Card";
import Afro_card from "../AfroCelebration/Afro_card";
import { useState, useEffect } from "react";
import Scrollables from "./Scrollables";

function Particulars(props){
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
		flexDirection: "column",
	}
	const sub_header = {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid #000", 
		marginLeft: "1px", 
		marginTop: "1px"

	}
	const sub_header2 = {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid #000",
		margin: "1px"
	}
	const details = {
		display: "flex",
		flexDirection: "column",
		border: "1px solid #000",
		height: "82vh"
	}
	const icons = {
		width:mobile?"25px":"40px", 
		height:mobile?"25px":"40px",
	}
	const custom = {
		padding: "0", 
		margin: "0",
		fontSize:mobile?"17px":"",
	}

	return(
		<div style={container}>
			<div style={sub_header}>
				<div >
					<WiTime10 style={icons} />
					<FaRegHandshake style={icons}/>
				</div>
				<div>
					<PiMapPinLine style={icons}/>
					<GrDocumentText style={icons}/>
				</div>
				<div>
				<MdPrint style={icons}/>
				<FaTimes style={icons}/>
				</div>
			</div>
			<div style={sub_header2}>
				<div>
					<h2 style={custom}>
						{props.heading}
					</h2>
					<h3 style={custom}>
						CATEGORY: {props.category}
					</h3>
				</div>
				<div>
					<TbWorldStar style={icons} />
					<PiVideo style={icons} />
					<PiImage style={icons} />
				</div>
			</div>
			<div style={details}>
			{/* <props.card /> */}
			{/* <Particulars_Card /> */}
			{/* <Afro_card /> */}
			<Scrollables />

			</div>
		</div>
	)
}
export default Particulars;