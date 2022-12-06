/* eslint-disable */

import './App.css';
import { useState } from 'react';
import Modal from './components/modal';
import Footer from './components/footer';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState([
    '3 매운 우동',
    '1 새우 우동',
    '2 니가사끼 우동'
  ]);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

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
    newLike[props] = newLike[props] + 1;
    setLike(newLike);
  }

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
              <h4 onClick={() => setModal(!modal)}> { text } </h4>
              <span style={{textAlign: "right", fontSize:"14px"}} onClick={() => likeHandle(number)}>
              좋아요 ❤️
              {like[number]}
              </span>  
              <p>2월 17일 발행</p>
            </div>
            
          )
        })
      }
      { modal == true ? <Modal /> : null }
      <Footer/>
    </div>
  );
}

export default App;
