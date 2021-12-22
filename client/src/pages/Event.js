import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import { sales } from "../assets/dummyData1";
import Item from "../components/EventPageComponent/EventPageItem"
import Aside from "../components/EventPageComponent/EventPageAside";
import Nav from "../components/EventPageComponent/EventPageNav";
import Footer from '../components/Footer'
import "./Event.css"
import axios from "axios";

export default function Event({isLogin, userinfo}) {
  const [store, setStore] = useState("전체")
  const [event, setEvent] = useState("전체")
  const [eventItem, setEventItem] = useState([])

  useEffect(() => { // 편의점 음료 특가 페이지가 최초 랜더링시 실행되는 코드, 로직 진짜 이상함..
    let queryString = `https://localhost:8443/item?`
    if (store !== "전체") queryString += `store-name=${store}&` 
    else queryString += ''

    if (event !== "전체") queryString += `event-info=${event}&`
    else queryString += ''

    axios.get(queryString)
      .then((res) => {
        setEventItem(res.data.data)
      })
  },[store, event])

  function getStore(storeName) {
    setStore(storeName)
  }

  function getEvent(eventName) {
    if(eventName ==='1 + 1') eventName = 1
    else if(eventName==='2 + 1') eventName = 2
    else if(eventName==='금액 할인') eventName = 3
    setEvent(eventName)
  }

  return (
    <div>
    <Header isLogin={isLogin} userinfo={userinfo}/>
      <div id='eventContainer'>
        <h1 id='salesH'>편의점 음료 특가❗</h1>
          <Aside getStore={getStore}/>
        <section id="eventListContainer">
          <Nav getEvent={getEvent}/>
          <article key={sales[0].id} id='eventList'>
            {eventItem.map((sale) => <Item key={sale.id} item={sale} />)}
          </article>
      </section>
    </div>
    <Footer />
  </div>
  );
}