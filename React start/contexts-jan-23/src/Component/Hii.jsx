import { useContext } from "react";
import cricketContext from "../Context/CricketContext";


const Hii = () => {

    const name = useContext(cricketContext)


    return (

        <div>
     <h1>Hii crickters</h1>

    <h2>Hiii :{name}</h2>        </div>
    )
}

export default Hii;