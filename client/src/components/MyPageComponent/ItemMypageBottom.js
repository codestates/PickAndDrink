import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMypageBottom.css'
import Items from '../MainPageComponent/Item'


function ItemMypageBottom ({likeItem, setToken, itemRefresh, isMypage}) {

  return (
        
        <div> 
          <article className="itemList">
            {likeItem.map((item) => <Items key={item.id} item={item} setToken={setToken} itemRefresh={itemRefresh} isMypage={isMypage} />)}
          </article>
        </div>

  );
}

export default ItemMypageBottom;