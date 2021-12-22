import React from "react";

export default function aside({getStore}) {
  return (
    <aside>
            <ul>
              <li onClick={e => getStore(e.target.textContent)}>전체</li>
              <li onClick={e => getStore(e.target.textContent)}>GS25</li>
              <li onClick={e => getStore(e.target.textContent)}>CU</li>
              <li onClick={e => getStore(e.target.textContent)}>미니스톱</li>
              <li onClick={e => getStore(e.target.textContent)}>이마트24</li>
              <li onClick={e => getStore(e.target.textContent)}>세븐일레븐</li>
            </ul>
    </aside>
  )
}