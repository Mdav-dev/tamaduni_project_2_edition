import React from "react";
import Home from "./Home_page";
import Sign_up from "./Sign_up";
import Login from "./Login";
import Afro_Celebration from "./AfroCelebration/Afro_Celebration";
import Cultural_mapping from "./Cultural Mapping/Cultural_mapping";
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import Reducerhook from "../Reducerhook";

function App(){

	return(
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home/>} />	
					<Route path="/login" element={<Login/>}/>
					<Route path="/sign_up" element = {<Sign_up/>}/>
					<Route path="/cultural_mapping" element = {<Cultural_mapping/>} />
					<Route path="/afro_celebration" element = {<Afro_Celebration/>} />
					<Route path="/reducerhook" element = {<Reducerhook/>} />

				</Routes>		
			</div>
		</Router>
	)
}

export default App;