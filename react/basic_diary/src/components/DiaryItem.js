import React, { useState } from 'react'
import '../css/DiaryItem.css'

function DiaryItem({ id, author, content, emotion, created_at, onDelete, onUpdate }) {

  // 수정 중인지 아닌지 불리언상태로 값을 저장
  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => setIsEdit(!isEdit)

  const [localChange, setLocalChange] = useState(content)

  const handleDelete = () => {
    if (window.confirm(`${ id }번째 일기를 정말 삭제하겠습니까?`)) {
      onDelete(id)
    }
  }
  
  const handleQuitEdit = () => {
    toggleIsEdit()
    setLocalChange(content)
  }

  const handleUpdate = () => {
    toggleIsEdit()
    onUpdate(localChange, id)
  }
  
  return (
    <div className='diaryItem'>
      <div key={id}>
        <p>작성자 : { author } | 감정 점수 : { emotion } | </p>
        <p>{new Date(created_at).toLocaleString()}</p>
      </div>
      <div>
        {isEdit ? (
          <div>
            <textarea 
              value={localChange}
              onChange={(e) => setLocalChange(e.target.value)} 
            />
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleUpdate}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
      </div>
    </div>
  )
}

export default DiaryItem
