import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import NewHogForm from "./NewHogForm";

import hogs from "../porkers_data";


function App() {
const [hog, setHog] = useState(hogs);
const [isGreased, setIsGreased] = useState(false);
const [sort, setSort] = useState(null);

function toggleGreased(){
	setIsGreased(!isGreased);
}

function sortHogs(sort){
	setSort(sort);
	const sortedHogs = [...hogs];
	if(sort === 'name'){
		sortedHogs.sort((a,b) => a.name.localeCompare(b.name));
	} else if(sort === 'weight'){
		sortedHogs.sort((a,b) => a.weight - b.weight);
	}
	setSort(sortedHogs);
}

	function onFormSubmit(newHog){
		setHog([...hog, newHog])
	}

	return (
		<div className="App">
			<Nav sortBy={sortHogs} toggleGreased={toggleGreased}/>
			<NewHogForm onFormSubmit={onFormSubmit}/>
			<TileList hogs={hog}/>
		</div>
	);
}

export default App;
