import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMypageBottom.css'
import Items from '../MainPageComponent/Item'


function ItemMypageBottom ({likeItem}) {

  return (
        
        <div> 
          <article className="itemList">
            {likeItem.map((item) => <Items key={item.id} item={item} />)}
          </article>
        </div>

  );
}

export default ItemMypageBottom;