import Nav_link from "./nav_link.jsx";

function Nav_link_container(props){
	
	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
		"width":"100%",
		"overflowX":"auto",
		"whiteSpace":"nowrap",

	}

	return(
		<div style={{...particulars, margin: "0", padding: "0"}}>
			<Nav_link />
		</div>
	)
}
export default Nav_link_container;