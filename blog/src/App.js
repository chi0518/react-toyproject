/* eslint-disable */

import './App.css';
import { useState } from 'react';
import Modal from './components/modal';
import CreateModal from './components/createModal';
import Footer from './components/footer';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState([
    '3 매운 우동',
    '1 새우 우동',
    '2 니가사끼 우동'
  ]);
  let [like, setLike] = useState([0,0,0]);
  let [unLike, setUnLike] = useState([0,0,0]);
  let [modal, setModal] = useState([false,false,false]);
  let [createModal, setCreateModal] = useState("");

  const titleHandle = () => {
    const newTitle = [...title]
    newTitle[0] = '크림 스파게티';
    setTitle(newTitle);
  }

  const sortHandle = () => {
    const newTitle = [...title];
    newTitle.sort();
    setTitle(newTitle);
  }
  
  const likeHandle = (props) => {
    const newLike = [...like];
    if (newLike[props] < 20){
      newLike[props] = newLike[props] + 1;
      setLike(newLike);
    } else {
      alert("좋아요가 꽉찼어여");
      return false;
    }
  }

  const unLikeHandle = (props) => {
    const newUnLike = [...unLike];
    if (newUnLike[props] < 20){
      newUnLike[props] = newUnLike[props] + 1;
      setUnLike(newUnLike);
    } else {
      alert("ㅜㅜ 분발하겠습니다.");
      return false;
    }
  }

  const modalHandle = (props) => {
   const newModal = [...modal];
   newModal[props] == false ? newModal[props] = true : newModal[props] = false; 
   setModal(newModal);
  }

  const updateTitle = () => {
    const newTitle = [...title]
    newTitle[0] = '여자코드 추천';
    setTitle(newTitle);
  }

  const create = () => {
    const newTitle = [...title];
    newTitle.push(createModal);
    modal.push(false);
    unLike.push(0);
    like.push(0);
    setTitle(newTitle);

  }
  console.log(title);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'white', fontSize:'22px'} }>블로구</h4>
      </div>
      <button onClick={sortHandle}>가나다순 정렬</button>
      <button onClick={titleHandle}>타이틀 변경 버튼</button>
      {
        title.map(function(text, number){
          return (
            <div className="list" key={number}>
              <h4 onClick={() => modalHandle(number)}> { text } </h4>
              <p style={{fontSize:"12px"}}>2월 17일 발행</p>
              <div style={{display:"flex",justifyContent: "space-between"}}>
                <span className="likeBtn" onClick={() => likeHandle(number)}>
                좋아요 ❤️
                {like[number]}
                </span>
                <span className="likeBtn" onClick={() => unLikeHandle(number)}>
                싫어요 😅
                {unLike[number]}
                </span> 
              </div>
              { modal[number] == true ? <Modal title={title[number]} updateTitle={updateTitle}/> : null }
            </div>
          )
        })
      }
      <CreateModal create={create} createModal={setCreateModal}/>
      <Footer/>
    </div>
  );
}

export default App;
