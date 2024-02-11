import React, {useState} from "react";
import Tile from "./Tile";

function TileList({hogs}){
    return (
        <div class="ui grid container">
            {
                hogs.map(hog => (
                    <Tile hog={hog}/>
                ))
            }
        </div>
    )
}

export default TileList;