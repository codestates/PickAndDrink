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
    }  else { // 여기는 store와 event 2개의 쿼리를 한꺼번에 보내야하는데 그 API는 없는?
      
      
    }


    // console.log(store)
    // console.log(event)
  },[store, event])

  function getStore(storeName) { // setState의 비동기성 이해 후 리팩토링
    setStore(storeName)
    // 편의점이 바뀔 때마다(사이드바를 누를 때 마다) axios요청 후 데이터 받아오고 렌더링 해야함
    // store라는 상태가 바뀔 때마다 axios요청을 해야하는데 이건 useEffect에서 처리해야하는 걸까?
  }

  function getEvent(eventName) { // setState의 비동기성 이해 후 리팩토링
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