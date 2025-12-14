import React, { startTransition } from "react";

const MovieDisplay = ({ selectedMovie }) => {


    // const [selectedMovie, setSelectedMovie] = useState("");
    //     console.log(selectedMovie);



    return (



        // <div style={{
        //     display:"flex",
        //     justifyContent:"space-around",
        // }
        // }>

        
                

                    <div className="movie-display">
                        <h1> Movie Details</h1>
                        <div>
                            {
                                selectedMovie.banner && <img src={selectedMovie.banner} alt={selectedMovie.title} />

                            }

                            <p>{selectedMovie.title}</p>
                            <p>{selectedMovie.actor}</p>
                            <p>{selectedMovie.genre}</p>
                            <p>{selectedMovie.director}</p>
                        </div>
                    </div>

                
            

    )

}
export default MovieDisplay;