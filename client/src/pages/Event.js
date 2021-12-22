import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import { sales } from "../assets/dummyData1";
import Item from "../components/EventPageComponent/EventPageItem"
import Aside from "../components/EventPageComponent/EventPageAside";
import Nav from "../components/EventPageComponent/EventPageNav";
import Footer from '../components/Footer'
import "./Event.css"
import axios from "axios";

export default function Event() {
  
  // const store = ['전체', '']
  const eventId = [1, 2]
  const [store, setStore] = useState(null)
  const [event, setEvent] = useState(null)
  const [eventItem, setEventItem] = useState([])

  useEffect(() => { // 편의점 음료 특가 페이지가 최초 랜더링시 실행되는 코드, 로직 진짜 이상함..
    if((store === null && event === null) || (store === '전체' && store === '전체')) { // 최초 랜더링과 상태값 2개가 모두 전체일 때 실행되는 코드
      let eventList = []
        eventId.map((eventId) => {
        axios.get(`https://localhost:8443/item?event-info=${eventId}`)
        .then((res) => {
          for(let i = 0; i < 2; i++) {
            eventList.push(res.data.data[i])
          }
          return eventList
        })
        .then((eventList) => {
          if(eventList.length === 4) { // 특히 여기 진짜 이상함
            setEventItem(eventList)
          }
        })
      })
    }  else { // 리팩토링
      axios.get(`https://localhost:8443/item?store-name=${store}&event-info=${event}`)
      .then((res) => {
        setEventItem(res.data.data)
      })
    }
    // console.log(store, event)
  }, [store, event])

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
    <Header />
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

// 전체, 2+1등을 눌렀을 때 서버에 axios보내고 서버에서 받아온 데이터를 상태값으로 관리해야할 듯