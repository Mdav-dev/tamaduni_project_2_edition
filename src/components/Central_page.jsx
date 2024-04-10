import React from "react";
import { useState, useEffect } from "react";



function Central(){

	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 
	   


	const Central_page = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
		height: "300vh"
	}
	const customStyle = {
		fontSize: "",
		fontWeight: "bold",
		background: "radial-gradient(circle,  rgba(223,68,162,1) 0%, rgba(80,164,46,1) 100%)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline-block"
	}	
	const aa = {
		position: "relative",
		width:"100%",
		paddingBottom:mobile?"45%" :"45%",
		overflow: "hidden",
	}
	const ab = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height:mobile?"100%":"100%",
		objectFit: "cover",
	}

	 const image_container = {
		...aa,		
	 }
	const landing = {
		gridColumn: "1/7",
		gridRow: "1/3",
		...image_container,
	}
	const customIntro = {
		color: "#fff",
		fontSize: mobile?"15px":"30px",
		padding: "10%",
		position: "absolute",

	}
	const imageStyling = {
		container:{
			position: "relative",
			width: "100%",
			paddingBottom: "75%",
			overflow: "hidden",

			// Other styles go below
			flex: "1",
		},
		image:{
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	}
	
	


	const customStyle4 = {
		display: "flex",
		flexDirection: mobile?"column":"",
		gap:mobile?"30px":"50px",
		padding: "20px",
		gridColumn: "1/7",
		gridRow: "3/7",
		background:"grey",
		color: "#fff",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"300",
		"fontStyle":"normal",

	 };
	 const customStyle4s = {
		gridColumn: "1/7",
		gridRow: "7/11",
		display: "flex",
		flexDirection: mobile?"column":"",
		gap:mobile?"30px":"50px",
		padding: "20px",
		background: "grey",
		color: "#fff",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"300",
		"fontStyle":"normal",
		
	 }
	const  customStyle5 = {
		display: "flex",
		flexDirection: "column",
		justifyContent:mobile?"flex-start":"center",
		alignItems: "center",
		flex: "1",
		padding:mobile?"10px":"50px",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}
	const imageStyle = {
		flex: "1"
	}
	const phone = {
		Central_page1: {

		},
		landing1: {

		},
		ab1:{

		},
		customIntro:{

		}
	}
	
	
	return (
	<div style={Central_page}>
		<div style={landing}>			
			<img style={ab} src="Images/Uneditted/75.jpg" alt="Maasai tribe photo"/>
			<div style={{...ab, background: "rgba(0, 0, 0, 0.6)",}}></div>			
			<h2 style={customIntro}><span style={customStyle}>Africanacity</span> is the rhythm of resilience, the melody of diversity,
			and the <span style={customStyle}>harmony of strength</span>. It's the celebration of a continent's spirit, 
			echoing through time with the vibrant beats of <span style={customStyle}>innovation</span>, 
			<span style={customStyle}>creativity</span>, and  <span style={customStyle}>unity</span>.</h2>
		</div>

		<div style = {customStyle4}>
			{mobile?<img style={imageStyle} src="Images/card_images/79.jpg" />:""}
			<div style = {customStyle5}>			
				<h1>Afro Celebration</h1>
				<p>"Afro Celebration" likely refers to a cultural event or festival celebrating African heritage, culture,
					 music, dance, and traditions. It could take various forms, such as a community gathering, concert, dance performance, or festival organized to commemorate and showcase aspects of African culture.
					These celebrations often include a vibrant display of traditional African attire, music genres 
					like Afrobeat, Afro-jazz, or traditional African rhythms, dance performances such as traditional
					 dances or contemporary African dance styles, art exhibitions, cultural workshops, and cuisine 
					 showcasing African flavors.
					</p>
					<h3><a style={{textDecoration: "none", color:"purple" }} href="/afro_celebration">Explore More</a></h3>
					
			</div> 
			{mobile?"":<img style={imageStyle} src="Images/card_images/79.jpg" />}
						
								
		</div>

		 <div style = {customStyle4s}>		 
			<img src="Images/card_images/75.jpg" alt="image for cultural mapping" style={{}}/>
			<div style={customStyle5}>
				<h1>Cultural Mapping</h1>
				<p>In Cultural Mapping we are going to study different cultures in 
				relation to their location and their similaries which together unites them as one people
				Cultural mapping is a process used to identify, document, and represent the cultural resources and assets within a particular community or 
				geographic area. It involves collecting data and information about various aspects of culture.
				</p>
				<h3><a style={{textDecoration: "none", color:"purple" }} href="/cultural_mapping">Explore More</a></h3>
			</div>		 	 
		 </div>
	</div>)
}
export default Central;