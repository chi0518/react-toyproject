const Modal = (props) => {
  return (
    <div className='modal' style={{}}>
        <h4>{props.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.updateTitle}>글 수정</button>
    </div>
  )
}

export default Modal;