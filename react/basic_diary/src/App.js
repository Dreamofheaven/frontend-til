import { useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import Lifecycle from "./Lifecycle";

function App() {
  const [data, setData] = useState([])

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_at = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_at,
      id: dataId.current,
    }
    dataId.current += 1
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.✈`)
    const newDiaryList = data.filter((item) => item.id !== targetId)
    setData(newDiaryList)
  }

  const onUpdate = (newContent, targetId) => {
    setData(
      data.map((item) => item.id === targetId ? {...item, content: newContent} : item
      )
    )
  }

  return (
    <div>
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate} /> 
    </div>
  );
}


export default App;
