import React from 'react'
import DiaryItem from './DiaryItem'
import '../css/DiaryList.css'

function DiaryList({ diaryList, onDelete, onUpdate }) {
  return (
    <div className='diaryList'>
      <div>
        <h1>일기 리스트</h1>
        <p>{diaryList.length}개의 일기가 있다.</p>
      </div>
      <div>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}
export default DiaryList
