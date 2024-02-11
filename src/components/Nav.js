import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({toggleGreased, sortBy}) => {

	function handleSort(e){
		sortBy(e.target.value);
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<label>
					Sort By:
					<select onChange={handleSort}>
						<option value="">None</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Greased Only:
					<input type="checkbox" onChange={toggleGreased} />
				</label>
			</div>
		</div>
	);
};

export default Nav;
