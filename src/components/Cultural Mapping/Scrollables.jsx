import React, {useState, useEffect} from 'react'
import Flag_card from '../AfroCelebration/flag_card'

function Scrollables() {
	const ImageUrl =  "https://flagcdn.com/224x168/" + "ke" + ".png"
	const container = {

	}

	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	const sub_container = {
			position: "relative",
			width: "100%",
			paddingBottom:mobile?"160%":"50%",
			overflow: "hidden",
			// display: "grid",
			// gridTemplateColumns: "1fr 1fr 1fr 1fr",
			// gridTemplateRows: "1fr 1fr 1fr 1fr",
	}
	const ImageStyle = {
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			objectFit: "cover",
			// filter: "blur(5px)",
			// gridColumn: "1/5",
			// gridRow: "1/5",
			// width: '100%', 
			// height: 'auto', 
			// display: 'block'
		
	}


  return (
    <div style={container}>
		<div
		className="image-container"
		style={sub_container}
	>
		<img
		src="Images/Uneditted/75.jpg"
		alt="Images/Uneditted/75.jpg"
		style={ImageStyle}
		/>
	</div>
    </div>
  )
}

export default Scrollables;
