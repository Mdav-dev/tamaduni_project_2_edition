import React from "react";

function ImageHome(props){

	

	return(		
			<img className={props.class} style={props.style} src={props.ImgSrc} alt={props.alt}/>
		)
}

export default ImageHome;