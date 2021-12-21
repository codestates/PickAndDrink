import React from "react";
import "./ItemMain.css";
import Item from "./Item";
import Sale from "./Sale"
import {items} from '../../assets/dummyData'
import {sales} from '../../assets/dummyData1'


function ItemMain() {
  return (
    <div id='itemMainContainer'>

      <div id="rankContainer">
        <h1 className='mainH'>픽냥이's 랭킹 Pick</h1>
        <section id="rankList">
          {items.map((item) => <Item key={item.id} item={item} />)}
        </section>
      </div>


      <div id="saleContainer">
        <h1 className='mainH'>할인이 곧 끝나요❗</h1>
        <section id="saleList">
          {sales.map((sale) => <Sale key={sale.id} sale={sale} />)}
        </section>
      </div>
      
    </div>
  );
}
export default ItemMain;
