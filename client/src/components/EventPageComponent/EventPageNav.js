import React from "react";

export default function Nav({getEvent}) {

  return (
    <nav id='eventGroupContainer'>
        <ul id="eventGroup">
          <li onClick={e => getEvent(e.target.textContent)}>전체</li>
          <li onClick={e => getEvent(e.target.textContent)}>1 + 1</li>
          <li onClick={e => getEvent(e.target.textContent)}>2 + 1</li>
          <li onClick={e => getEvent(e.target.textContent)}>금액 할인</li>
        </ul>
      </nav>
  )
}