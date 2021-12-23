import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))
`
    text-align: center;
    border-radius: 10px;
    background-color: #ffffff;
    width: 25%;
    height: 50%;
    > span.close-btn {
      margin-top: 5px;
      cursor: pointer;
    }
    > div.desc {
      margin-top: 25px;
      color: #4000c7;
    }
`;

const CloseBtn = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export default function Modal({isOpen, curItemId, openModalHandler, modalItem}) {
  console.log(modalItem)
  const [comment, setComment] = useState(null)
  useEffect(() => {
    axios.get(`https://localhost:8443/comment/${curItemId}`)
    .then((res) => {
      setComment(res.data.data[0].comment)
    })
  },[])

  return (
    <>
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={openModalHandler}>&times;</CloseBtn>
            {
              modalItem ? <div>좋아요 개수&ensp;👍&ensp;{modalItem.ranking_count}</div>
              : <div>👍&ensp; 0</div>
            }
            <br />
            {
              comment ? <div>{comment}</div>
              : <div>댓글이 없습니다.</div>
            }
          </ModalView>
        </ModalBackdrop>
    </>
  );
};