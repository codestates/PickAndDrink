import React from "react";
import "./ItemMain.css";
import { item } from "../assets/dummyData";
import { sale } from "../assets/dummyData1";

function ItemMain() {
  return (
    <>
      {/*----------------- 랭킹리스트 이거 컴포넌트로 분리해야할 듯 -----------------*/}
      <div id="rankContainer">
        <h1 className='mainH'>픽냥이's 랭킹 Pick</h1>
        <section id="rankList">
          <article key={item[0].id} className="item">
            <div className="itemImg">
              <img src="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801155741792_006.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[0].category}1등</div>
            <h1 >{item[0].name}</h1>
          </article>

          <article key={item[1].id} className="item">
            <div className="itemImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[1].category} 1등</div>
            <h1>{item[1].name}</h1>
          </article>

          <article key={item[2].id} className="item">
            <div className="itemImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[2].category} 1등</div>
            <h1>{item[2].name}</h1>
          </article>

          <article key={item[3].id} className="item">
            <div className="itemImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[3].category} 1등</div>
            <h1>{item[3].name}</h1>
          </article>

          <article key={item[4].id} className="item">
            <div className="itemImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[4].category} 1등</div>
            <h1>{item[4].name}</h1>
          </article>

          <article key={item[5].id} className="item">
            <div className="itemImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <span className='emoji'>🥇</span>
            <div className="firstClass">{item[5].category} 1등</div>
            <h1>{item[5].name}</h1>
          </article>
        </section>
      </div>

      <div id="saleContainer">
        <h1 className='mainH'>할인이 곧 끝나요❗</h1>

        <section id="saleList">
          <article key={sale[0].id} className="sale">
            <div className="saleImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="endSale">{sale[0].category}✌</div>
            <h1>{sale[0].name}</h1>
          </article>

          <article key={sale[1].id} className="sale">
            <div className="saleImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="endSale">{sale[1].category}</div>
            <h1>{sale[1].name}</h1>
          </article>

          <article key={sale[2].id} className="sale">
            <div className="saleImg">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="endSale">{sale[2].category}</div>
            <h1>{sale[2].name}</h1>
          </article>
        </section>
      </div>
    </>
  );
}
export default ItemMain;
