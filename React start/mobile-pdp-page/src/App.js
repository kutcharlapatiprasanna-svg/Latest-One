import React from 'react';
import MenuComponent from './Components/MenuComponent/MenuComponent';
import WheelChair from './Components/WheelChair/WheelChair';
import ThingsComponent from './Components/ThingsComponent/ThingsComponent';
import Driveimage from './Components/Driveimage/Driveimage';
import Products from './Components/Products/Products';

const App = () => {
  return (
    <div>
      <Driveimage/>
      <MenuComponent/>
      <WheelChair/>
      <ThingsComponent/>
      <Products/>
    </div>
  );
}

export default App;
