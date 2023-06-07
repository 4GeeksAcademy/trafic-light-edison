import React from "react";
import TrafficLight from "./traficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<TrafficLight/>
		</div>
	);
};

export default Home;
