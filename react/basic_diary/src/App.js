import { useRef, useEffect, useMemo, useCallback, useReducer } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const reducer = (state, action) => {
  switch(action.type){
    case 'INIT':
      
  }
}


function App() {
  // const [data, setData] = useState([])
  
  const [data, dispatch] = useReducer(reducer, [])

  const dataId = useRef(0)

  const getData = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json())
    const initData = res.slice(0, 20).map((item) => {
      return {
        author : item.email,
        content : item.body,
        emotion : Math.floor(Math.random() * 5) + 1,
        created_at : new Date().getTime(),
        id : dataId.current++
      }
    })
    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])

  const onCreate = useCallback(
    (author, content, emotion) => {
    const created_at = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_at,
      id: dataId.current,
    }
    dataId.current += 1
    setData((data) => [newItem, ...data])
  },[])

  const onDelete = useCallback((targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.✈`)
    setData(data => data.filter((item) => item.id !== targetId))
  },[])

  const onUpdate = useCallback((newContent, targetId) => {
    setData(
      data => data.map((item) => item.id === targetId ? {...item, content: newContent} : item
      )
    )
  },[])

  // 함수로 사용하는 것이 아니라, 값으로 사용해야 한다. 
  const diaryRecord = useMemo(() => {
    console.log('일기 분석 시작')

    const goodCount = data.filter((item) => item.emotion >= 3).length
    const badCount = data.length - goodCount
    const goodRatio = (goodCount / data.length) * 100

    return { goodCount, badCount, goodRatio }
  }, [data.length])

  const { goodCount, badCount, goodRatio } = diaryRecord

  return (
    <div>
      {/* <Lifecycle/> */}
      {/* <OptimizeTest /> */}
      {/* <OptimizeTest2 /> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 안좋은 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate} /> 
    </div>
  );
}


export default App;
