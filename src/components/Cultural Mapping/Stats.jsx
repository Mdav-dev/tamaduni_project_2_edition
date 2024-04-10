import { HiOutlineDocumentText, HiOutlineDownload } from "react-icons/hi";
import { BsCameraVideo, BsEye, BsHeart, BsFillShareFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
function Stats(props){
	const container = {
		display: "grid",
		border: "1px solid #000",
		height: "14vh",
		margin: "5px",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr 1fr",
		padding: "5px",

	}
	const size = {
		width: "35px",
		height: "30px",
		padding: "0",
		margin: "0"
	}
	const sub_container = {
		display: "flex",
		alignItems: "flex-end",
		// border: "1px solid #000"
	}
	const number = {
		fontSize: "10px"
	}
	const doc = props.doccs;
	return(
		<div style={container}>

		<div style={sub_container}>
		 	<HiOutlineDocumentText style={size} />
			<div style={number}>{props.docs}</div>
		</div>
		<div style={sub_container}>
		 	<BsCameraVideo style={size} />
			<div style={number}>{props.video}</div>
		</div>
		<div style={sub_container}>
		 	<ImStatsBars style={size} />
			<div style={number}>{props.rates}</div>
		</div>
		<div style={sub_container}>
		 	<FaPeopleGroup style={size} />
			<div style={number}>{props.people}</div>
		</div>
		<div style={sub_container}>
		 	<HiOutlineDownload style={size} />
			<div style={number}>{props.downloads}</div>
		</div>
		<div style={sub_container}>
		 	<BsEye style={size} />
			<div style={number}>{props.views}</div>
		</div>
		<div style={sub_container}>
		 	<BsHeart style={size} />
			<div style={number}>{props.likes}</div>
		</div>
		<div style={sub_container}>
		 	<BiMessage style={size} />
			<div style={number}>{props.texts}</div>
		</div>
		<div style={sub_container}>
		 	<AiOutlineUsergroupAdd style={size} />
			<div style={number}>{props.grp_add}</div>
		</div>
		<div style={sub_container}>
		 	<BsFillShareFill style={size} />
			<div style={number}>{props.shares}</div>
		</div>
		
		
				
		</div>
	)
}

export default Stats;