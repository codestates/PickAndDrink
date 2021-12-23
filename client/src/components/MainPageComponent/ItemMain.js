import React from "react";
import "./ItemMain.css";
import Item from "./Item";
import Sale from "./Sale"
import { useEffect, useState } from "react"; 
// import {items} from '../../assets/dummyData'
// import {sales} from '../../assets/dummyData1'
import Modal from "../Modal";
import axios from "axios";

axios.defaults.withCredentials = false;

function ItemMain({setToken}) {

  const category = ['탄산음료', '커피', '건강음료', '유제품', '전통음료', '물', '과채음료']
  const eventId = [1, 2]

  const [curItemId, setCurItemId] = useState(null)
  const [firstItem, setFirstItem] = useState([])
  const [eventInfo, setEventInfo] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalItem, setModalItem] = useState()

  function openModalHandler(item) {
    setIsOpen(!isOpen)
    setCurItemId(item.id)
    setModalItem(item)
  }
  
  useEffect(() => {
    let categoryArr = []
    let eventArr = []

    category.map((categoryName) => {
      axios.get(`https://localhost:8443/item?category=${categoryName}`)
      .then((res) => {
        categoryArr.push(res.data.data[0])
        return categoryArr
      })
      .then((categoryArr) => {
        if(categoryArr.length === category.length) setFirstItem(categoryArr)
      })
    })

    eventId.map((eventId) => {
      axios.get(`https://localhost:8443/item?event-info=${eventId}`)
      .then((res) => {
        eventArr.push(res.data.data)
        return eventArr
      })
      .then((eventArr) => {
        if(eventArr.length === 2) {
          setEventInfo(eventArr)
        }
      })
    })
  }, [])

  return (
    <div id='itemMainContainer'>
      {
      isOpen ? <Modal isOpen={isOpen} curItemId={curItemId} openModalHandler={openModalHandler} modalItem={modalItem}/>
      : ''
      }
      <div id="rankContainer">
       <div className="pick">
        <div className="pick-img">
          <img src="/images/cat.png" alt=""/>
        </div>  
          <h1 className='mainH'>픽냥이's 랭킹 Pick❗</h1>
       </div>  
        <section id="rankList">
          {firstItem.map((item) => <Item key={item.id} item={item} setToken={setToken}  openModalHandler={openModalHandler} isOpen={isOpen} curItemId={curItemId} modalItem={modalItem} />)}
        </section>
      </div>


      <div id="saleContainer">
        <div className="pick">
        <div className="pick-img">
          <img src="/images/cat.png" alt=""/>
        </div>  
          <h1 className='mainH1'>할인 상품이에요❗</h1>
        </div>
        <section id="saleList">
          {eventInfo.map((sale) => <Sale key={sale[0].id} sale={sale[0]} openModalHandler={openModalHandler} isOpen={isOpen} curItemId={curItemId} />)} {/* 이부분 이벤트별로 0번째 정보들만 랜더링해주는데 더 랜더링되게 할 수 없을까? */}
        </section>
      </div>
      
    </div>
  );
}
export default ItemMain;
