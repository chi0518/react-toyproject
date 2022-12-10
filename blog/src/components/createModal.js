const CreateModal = (props) => {
  return (
  <>
    <input type="text" onChange={(e) => { props.createModal(e.target.value) }} />
    <button onClick={props.create}>글 등록</button>
  </>
  )
}

export default CreateModal;