
function Particulars_Card(props){
	const card_container = {
		display: "flex",

	}
	const card_details = {
		flex: "1",
	}
	const card_image = {
		flex: "2",
		
	}
	
	
	const a = {
		position: "relative",
		width: "100%",
		paddingBottom: "75%",
		overflow: "hidden",
	}
	const b = {
		position: "absolute",
		top: "0",
		left: "0",
		zIndex: "10",
		background: "rgb(0,0,128,0.5)",		
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		objectFit: "cover",
	}
	const img ={
		
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		zIndex: "1",
	}
	const img1 = {
		height: "80vh",
	}
	const d = {
		color: "#fff"
	}
	return(
		<div style={card_container}>
			<div style={card_details}>
				<h4>{props.name}</h4>
				<h4>{props.contacts}</h4>
				<h4>{props.Location}</h4>
				<h4><a href="/cultural_mapping">Virtual Tours & Online Exhibitions</a></h4>
				<h4><a href="/cultural_mapping">Collections and Interactive Exhibitions</a></h4>
				<h4><a href="/cultural_mapping">Education programs & Resourses</a></h4>
				<h4><a href="/cultural_mapping">Cultural Heritage Preservation</a></h4>
				<h4><a href="/cultural_mapping">Collaborations & Partnerships</a></h4>
				<h4><a href="/cultural_mapping">Event & Upcoming Exhibitions</a></h4>
				<h4><a href="/cultural_mapping">Vistor Review & Tips</a></h4>
			</div>
			<div style={card_image}>
				<div style={a}>
					<div style={b}>
						<h4 style={d}>
							Jambo, Karibu Kenya
						</h4>
					</div>
					{/* <div style={img}> */}
						<img src="/Images/Editted/87.jpg" style={img} />
					{/* </div>				 */}
				</div>
			</div>
		</div>
	)
} 

export default Particulars_Card;