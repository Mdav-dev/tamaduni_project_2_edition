// import backgroundImage from "/xampp/htdocs/Tamaduni_Project/my-app/public/Images/Editted/pexels-gary-12339475.jpg"

function FirstExcerpt(){
	const customStyle = {
		// background: backgroundImage,
	}
	const customStyle1 = {
		background: "url(Images/Editted/pexels-gary-12339475.jpg)",
	}
	const customStyle2 = {
		background: "",
	}

	return(
		<div style={customStyle}>
		<div style={customStyle1}>

		</div>
		<div style={customStyle2}>

		</div>
		</div>
	)
}
export default FirstExcerpt;