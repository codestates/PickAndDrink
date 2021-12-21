import React from "react";
import Header from "../components/Header";
import { sales } from "../assets/dummyData1";
import Item from "../components/EventPageComponent/EventPageItem"
import Aside from "../components/EventPageComponent/EventPageAside";
import Nav from "../components/EventPageComponent/EventPageNav";
import Footer from '../components/Footer'
import "./Event.css"

export default function Event() {
  return (
    <>
    <Header />
      <div id='eventContainer'>
        <h1 id='salesH'>편의점 음료 특가❗</h1>
    <Aside />
      <section id="eventListContainer">
    <Nav />
        <article key={sales[0].id} id='eventList'>
          {sales.map((sale) => <Item key={sale.id} item={sale} />)}
        </article>
      </section>
    </div>
    <Footer />
  </>
  );
}

// 전체, 2+1등을 눌렀을 때 서버에 axios보내고 서버에서 받아온 데이터를 상태값으로 관리해야할 듯