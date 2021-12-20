import React from "react";
import Header from "../components/Header";
import { sale } from "../assets/dummyData1";
import "./event.css"

export default function Event() {
  return (
    <>
      <Header />
      
      <section id="eventContainer">
      <div id='test1'>
        <img src='/images/logo1.jpg' id='test1'/>
      </div>
      <h1 id='saleH'>편의점 음료 특가❗</h1>
        <nav id='eventGroupContainer'>
          <ul id="eventGroup">
            <li>전체</li>
            <li>2 + 1</li>
            <li>1 + 1</li>
            <li>금액 할인</li>
          </ul>
        </nav>

      <aside>
        <ul>
          <li>전체</li>
          <li>GS25</li>
          <li>CU</li>
          <li>미니스톱</li>
          <li>이마트24</li>
          <li>세븐일레븐</li>
        </ul>
      </aside>

        <article key={sale[0].id} id='eventList'>
          <div className='event'>
            <div className='eventImg'>
              <img src={sale[0].img} alt='' />
            </div>
            <div className='eventInfo'>
              <div className='eventCategory'>
                {sale[0].category}
              </div>
              <div>
                ⭐
              </div>
            </div>
            <div className='test'>
              {sale[0].name} {sale[0].price}원
              <br />
              {sale[0].category}
            </div>
          </div>

          <div className='event'>
            <div className='eventImg'>
              <img src={sale[1].img} alt='' />
            </div>
            <div className='eventInfo'>
              <div className='eventCategory'>
                {sale[1].category}
              </div>
              <div>
                ⭐
              </div>
            </div>
            <div className='test'>
              {sale[1].name} {sale[1].price}원
              <br />
              {sale[1].category}
            </div>
          </div>

          <div className='event'>
            <div className='eventImg'>
              <img src={sale[2].img} alt='' />
            </div>
            <div className='eventInfo'>
              <div className='eventCategory'>
                {sale[2].category}
              </div>
              <div>
                ⭐
              </div>
            </div>
            <div className='test'>
              {sale[2].name} {sale[2].price}원
              <br />
              {sale[2].category}
            </div>
          </div>

          <div className='event'>
            <div className='eventImg'>
              <img src={sale[3].img} alt='' />
            </div>
            <div className='eventInfo'>
              <div className='eventCategory'>
                {sale[3].category}
              </div>
              <div>
                ⭐
              </div>
            </div>
            <div className='test'>
              {sale[3].name} {sale[3].price}원
              <br />
              {sale[3].category}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

// 전체, 2+1등을 눌렀을 때 서버에 axios보내고 서버에서 받아온 데이터를 상태값으로 관리해야할 듯