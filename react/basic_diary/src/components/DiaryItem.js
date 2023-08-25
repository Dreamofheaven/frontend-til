import React from 'react'

function DiaryItem({ onDelete, id, author, content, emotion, created_at }) {
  return (
    <div>
      <div key={id}>
        <p>작성자 : { author }</p>
        <p>내용 : { content }</p>
        <p>감정 점수 : { emotion }</p>
        <p>{new Date(created_at).toLocaleString()}</p>
      </div>
      <div>
        <button onClick={() => {
          if (window.confirm(`${ id }번째 일기를 정말 삭제하겠습니까?`)) {
            onDelete(id)
          }
        }}>
          삭제하기
        </button>
      </div>
    </div>
  )
}

export default DiaryItem
