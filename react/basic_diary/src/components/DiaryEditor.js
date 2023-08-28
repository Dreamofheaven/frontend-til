import React, { useState, useRef }  from 'react'
import '../css/DiaryEditor.css'

function DiaryEditor({ onCreate }) {
  const authorInput = useRef()
  const contentInput = useRef()
  
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  }) 

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1){
      authorInput.current.focus()
      return
    }

    if (state.content.length < 5){
      contentInput.current.focus()
      return
    }
    onCreate(state.author, state.content, state.emotion)
    alert('저장 성공!!')
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }

  return (
    <div className="diaryEditor">
      <h1>오늘의 일기</h1>
      <div className='author-box'>
        <input ref={authorInput} name="author" value={state.author} placeholder='작성자' onChange={handleChangeState} />
      </div> 
      <div className='content-box'>
        <textarea ref={contentInput} name="content" value={state.content} placeholder='내용' onChange={handleChangeState} />
      </div>
      <div className='bottom'>
        <div className='emotion-box'>
          <select name='emotion' value={state.emotion} onChange={handleChangeState}>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
          </select>
        </div>

        <div className='diary-submit'>
          <button onClick={handleSubmit}>일기 저장</button>
        </div>
      </div>
    </div>
  )
}

export default DiaryEditor
