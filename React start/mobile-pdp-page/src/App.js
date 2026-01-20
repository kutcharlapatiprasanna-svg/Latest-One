import React from 'react';
import MenuComponent from './Components/MenuComponent/MenuComponent';
import WheelChair from './Components/WheelChair/WheelChair';
import ThingsComponent from './Components/ThingsComponent/ThingsComponent';
import Driveimage from './Components/Driveimage/Driveimage';
import Products from './Components/Products/Products';
import ActionsPage from './Components/ActionsPage/ActionsPage';
import Features from './Components/Features/Features';

const App = () => {
  return (
    <div>
      <Driveimage/>
      <MenuComponent/>
      <WheelChair/>
      <ThingsComponent/>
      <Products/>
      <ActionsPage/>
      <Features/>
    </div>
  );
}

export default App;
