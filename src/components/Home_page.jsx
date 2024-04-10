import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import Central from "./Central_page";
import FirstExcerpt from "./FirstExcerpt";

function Home(props){
	const [sidebar, setSidebar] = useState(false);

	function handleOnclick(){
		setSidebar(!sidebar)
	}

	return(
		<div className="main_page">			
			<Header buttonClick = {handleOnclick} 
				title = "TAMADUNI"
				
			/>
			<Central />
			<Sidebar toggle = {sidebar}
			ClickIt = {handleOnclick}
			side = "left" />			
			<FirstExcerpt />
			<Footer />			
		</div>
	)
}
export default Home;