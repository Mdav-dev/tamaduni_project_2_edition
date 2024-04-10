import { TbPhotoPlus } from "react-icons/tb";
import { RiVideoAddLine } from "react-icons/ri";
function Afro_card(props){

	const container = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
		border: "1px solid #000",
		height: "90vh",
		margin: "2px"


	}
	const a = {
		gridColumn: "1/6",
		gridRow: "1/2",
		background: "#00005650",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		fontStyle: "none",
		
	}
	const b = {
		gridColumn: "6/8",
		gridRow: "1/5",
		background: "#00670050",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

	}
	const aa = {
		position: "relative",
		width: "100%",
		paddingBottom: "75%",
		overflow: "hidden",

	}
	const ab = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}
	const c = {
		gridColumn: "1/4",
		gridRow: "2/6",
		background: "#09806050",
		...aa,

	}
	const d = {
		gridColumn: "4/6",
		gridRow: "2/5",
		background: "#21405650",

	}
	const e = {
		gridColumn: "4/8",
		gridRow: "5/6",
		background: "#90060050",

	}
	const icon = {
		height: "90px",
		width: "90px",
	}

	return(
		<div style={container}>
			<div style={a}>
				<p><a href="/cultural_mapping">Film Training Schools</a></p>
				<p><a href="/cultural_mapping">Film Directors</a></p>

			</div>
			<div style={b}>
				<h5>Profile/Portfolio</h5>
				<TbPhotoPlus style={icon}/>
				<RiVideoAddLine style={icon} />			
			</div>
			<div style={c}>
				<img src="/Images/Editted/87.jpg" style={ab}/>
			</div>
			<div style={d}>
				<div>Location</div>

			</div>
			<div style={e}>

			</div>
		</div>
	)
}
export default Afro_card