import React from 'react'
import DiaryItem from '../components/DiaryItem'

function DiaryList({ diaryList, onDelete, onUpdate }) {
  return (
    <div>
      <h2>일기 리스트</h2>
      <p>{diaryList.length}개의 일기가 있다.</p>
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
