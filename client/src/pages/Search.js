import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RankItem from '../components/MainPageComponent/RankItem.js'
import axios from 'axios'
import "./Event.css"


export default function Search({isLogin, setToken, userinfo}) {
  let refresh = window.location.search
  const [itemList, setItemList] = useState([])


  useEffect( () => {
    const queryString = decodeURI(window.location.search)

    axios({
      method: 'GET',
      url: `https://localhost:8443/item${queryString}`,
      headers: {
        accept: 'application/json',
      },
    })
    .then(result => {
      setItemList(result.data.data)
    })
  }, [refresh]) // refresh는 지우면 안됩니다 렌더링시키려고 일부러 쓴거에요
  
  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo} />
      <div id='eventContainer'>
      <div>{itemList.map((item) => <RankItem isLogin={isLogin} setToken={setToken} key={item.id} item={item} />)}</div>
      </div>
      <Footer />
    </div>
  );
}
