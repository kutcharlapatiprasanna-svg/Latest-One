import React, { useContext, useState } from "react";
import colorContext from "../Context/styleContext";


const Hello = () => {
    const { theme, lightTheme,darkTheme } = useContext(colorContext)
    const[isDark, setIsDark] = useState(false);



  function switchTheme(){
    if(isDark==false){
        darkTheme();
    }
  
  else{
    lightTheme();
  }
  setIsDark(!isDark);
}



    return (

        <div>

            <div style={{
                color: theme.color,
                backgroundColor: theme.backgroundColor,
                border: theme.border
            }}>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas unde
                    esse excepturi veritatis modi perspiciatis iure cupiditate, tempore tenetur sunt officia
                    debitis assumenda doloribus reiciendis voluptatibus consectetur beatae in ipsam dolorum non
                    veniam exercitationem suscipit dicta. Blanditiis fugit hic optio dolores eius voluptatum
                    animi iure suscipit. Nisi fuga maiores mollitia hic repellat ipsum perferendis incidunt asperiores
                    placeat, ipsam, optio voluptatem. Cumque minima inventore voluptas impedit quam nisi quaerat veritatis
                    porro non corporis delectus explicabo, vitae illum? Vel fugit alias corporis minus perspiciatis tenetur
                    autem accusamus error, ad, hic voluptatum dolores culpa eos in at iusto iste illum. Odit, nesciunt asperiores.</p>
                <ol>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>
            {/* <button onClick={darkTheme  } > Black theme</button>
             <button onClick={lightTheme  } > Light theme</button> */}
             <button onClick={switchTheme}>Switch theme</button>
        </div >
    )

}

export default Hello;