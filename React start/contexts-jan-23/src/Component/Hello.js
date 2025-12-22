import { useContext } from "react";
import cricketContext from "../Context/CricketContext";


const Hello = () => {
    const {cricketer,setCricketer}= useContext(cricketContext);

    // const obj = useContext(cricketContext)

    // console.log(obj);

    function updateAge(){

      setCricketer({...cricketer,age: cricketer.age + 1})

    }
    return (  

        <div>
            <h1>Welcome {cricketer.name}</h1>
            <p>Age:{cricketer.age}</p>
            <p>country:{cricketer.country}</p>
            <p>retired:{cricketer.retired?"yes":"no"}</p>
            <button onClick={updateAge}>Update prasanna's age</button>

            <hr />
        </div>
    )
}

export default Hello;

