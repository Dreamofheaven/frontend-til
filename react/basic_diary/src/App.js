import { useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";


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

  return (
    <>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </>
  );
}

export default App;
