import React from 'react'
import DiaryItem from './DiaryItem'

function DiaryList({ onDelete, diaryList }) {
  return (
    <div>
      <h2>일기 리스트</h2>
      <p>{diaryList.length}개의 일기가 있다.</p>
      <div>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}
export default DiaryList
