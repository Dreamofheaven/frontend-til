import { useState, useRef } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import RecordPage from "./pages/RecordPage";
import Footer from "./components/Footer";

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

  console.log(window.location.pathname)
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/diary' element={<DiaryList />} />
        <Route path='/create' element={<DiaryEditor />} />
        <Route path='/record' element={<RecordPage />} />
      </Routes>
      {(window.location.pathname !== '/')  && <Footer/> }
    </Router>
    </div>
  );
}

/* <DiaryEditor onCreate={onCreate} />
<DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate} />  */

export default App;
