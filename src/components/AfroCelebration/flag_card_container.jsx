 import Flag_card from "./flag_card";
import countries from "./countries";

 function Flag_card_container(props){

	
	const mappedCountries = Object.entries(countries).map(([code, name]) => {
		return { code, name }; // You can format the data as needed
	 });
	 
	 // Displaying the mapped countries
	 function createCard(mappedCountry){
		return (
			<Flag_card 
				codes={mappedCountry.code}
				country={mappedCountry.name}
			/>
		)
	 }

	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
		"width":"100%",
		"overflowX":"auto",
		"whiteSpace":"nowrap",

	}
	return(
		<div style={{...particulars, margin: "0", padding: "0", }}>
			{/* {mappedCountries.map(createCard)} */}
			<Flag_card 
				codes="ug"
				country="Uganda"
			/>
			<Flag_card 
				codes="tz"
				country="Tanzania"
			/>
			<Flag_card 
				codes="rw"
				country="Rwanda"
			/>
			<Flag_card 
				codes="ke"
				country="Kenya"
			/>
			<Flag_card 
				codes="et"
				country="Ethiopia"
			/>
			<Flag_card 
				codes="so"
				country="Somalia"
			/>
			<Flag_card 
				codes="bi"
				country="Burundi"
			/>
			<Flag_card 
				codes="cd"
				country="D R C"
			/>
			<Flag_card 
				codes="ss"
				country="South Sudan"
			/>
		</div>
	)
 }
 export default Flag_card_container;