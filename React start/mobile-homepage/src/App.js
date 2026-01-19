import React from 'react';
import MenuPage from './Components/Component1/MenuPage';
import Main from './Components/Component2/Main';
import FeaturedProduct from './Components/FeturedProduct/FeaturedProduct';
import NewProduct from './Components/NewProducts/NewProduct';
import NewProducts from './Components/NewProducts/NewProduct';
import Driving from './Components/Driving/Driving';
import News from './Components/News/News';
import QuestionMark from './Components/QuestionMark/QuestionMark';
import Industry from './Components/Industry/Industry';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div>
      <MenuPage/>
      <Main/>
      <FeaturedProduct/>
      <NewProducts/>
      <Driving/>
      <News/>
      <QuestionMark />
      <Industry/>
      <Footer/>
      
    </div>
  );
}

export default App;
