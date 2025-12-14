import React, { useState } from "react";
import moviesData from "../data/moviesData";
// import MovieDisplay from "./MovieDisplay";



const MovieList = ({ updateMovie }) => {

    // const [selectedMovie, setSelectedMovie] = useState("");
    // console.log(selectedMovie);




    return (
        <div>

            <div className="movie-list">
                {
                    moviesData.map((item, index) => (
                        <p
                            onClick={() => updateMovie(item)}
                            key={index}>{item.title}</p>
                    ))
                }


            </div>

{/* 
            <MovieDisplay selectedMovie=
                {selectedMovie} /> */}
        </div>



    )
}

export default MovieList;