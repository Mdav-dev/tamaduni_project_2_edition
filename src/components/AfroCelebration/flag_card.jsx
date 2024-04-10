 
 function Flag_card(props){

	const country_code = props.codes;
	const country_name = props.country;
	const a = "https://flagcdn.com/224x168/" + country_code + ".png"

	const b={
		height: "42px",
		width: "70%",
		marginRight: "30px",
		marginLeft: "30px",
		padding:"7px",
	}
	const c = {
		padding: "0",
		margin: "0",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"600",
		"fontStyle":"normal",
		fontSize: "0.9rem"
	}
	
	return(
		<div style={b}>
			<img
			src ={a}
			width="35"
			height="28"
			style={c}
			alt={country_name}/>

			<div><h3 style={c}>{country_name}</h3></div>
		</div>
	)
 }
 export default Flag_card;