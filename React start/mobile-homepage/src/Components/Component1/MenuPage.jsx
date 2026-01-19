import React from 'react';
import menuIcon from '../../assets/menu_icon.png';
import searchIcon from '../../assets/search_icon.png';
import userIcon from '../../assets/user_icon.png';
import './style.css';

const MenuPage = () => {
  return (
    <div className='menu'>
      <div className='menu2'>
        <img src={menuIcon} alt='menu'></img>
        <p>Menu</p>
      </div>

      <div className='second-icon'>
        <img src={searchIcon} alt='search'></img>
        <img src={userIcon} alt='user'></img>
        
      </div>
    </div>
  );
}

export default MenuPage;
