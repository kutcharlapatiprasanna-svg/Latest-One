
import React from 'react';
import Hello from './Component/Hello';
import Hii from './Component/Hii';
import CricketProvider from './Context/CricketProvider';

const App  = () =>{
  return (
    <div className="App">
   
      {/* <Hii/> */}
      <Hello />
      {/* <CricketProvider>

         <Hello />
         <Hii/>
      </CricketProvider> */}
    </div>
  );
}

export default App;