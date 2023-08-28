import React, { useEffect, useState, useRef } from 'react'

// 자식 컴포넌트
// 언마운트는 콜백함수가 함수를 return하게 하면 된다. 
const UnmountTest = () => {
  useEffect(() => {
    console.log('언마운트 테스트가 마운트 되었다')
    return () => {
      // Unmount 시점에 실행
      console.log('언마운트 테스트가 Unmount!')
    }
  }, [])

  return (
    <div style={{ fontFamily: 'S-CoreDream-3Light' }}>언마운트 테스트 입니다.</div>
  )
}

// 부모 컴포넌트
function LifeCycle() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [temp, setTemp] = useState('')

  const textInput = useRef()

  // 언마운트 테스트 관련 state
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  // 컴포넌트가 mount될 때 처리할 일들을 콜백함수에 넣어준다. 
  // 뎁스 에레이 안에 있는 값이 변경될 때 동작한다.
  useEffect(() => {
    console.log('Mount!')
  }, []) 

  // 컴포넌트가 update될 때 처리할 일들을 콜백함수에 넣어준다.
  // 뎁스 어레이를 넣지 않는다.
  useEffect(() => {
    console.log('Update!')
  })

  useEffect(() => {
    console.log(`count is update : ${count}`)
  }, [count])

  useEffect(() => {
    console.log(`text is update : ${text}`)
  }, [text])

  const handleDecrease = (() => {
    if (count !== 0){
      setCount(count - 1)
    }
  })

  const handleIncrease = (() => {
    setCount(count + 1)
  })

  const handleInput = (() => {
    if (temp === "") {
      textInput.current.focus()
    } else {
      setText(temp)
    }
    setTemp("")
  })

  return (
    <div style={{ padding: 20 }}>
      <div>
        <button onClick={handleDecrease}>-</button>
        {count}
        <button onClick={handleIncrease}>+</button>
      </div>
      <div>
        <input ref={textInput} value={temp} onChange={(e) => setTemp(e.target.value)} />
        <button onClick={handleInput}>입력</button>
        <span>{text}</span>
      </div>
      <div className='toggle-button' style={{ marginTop: 20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
      </div>
    </div>
  )
}

export default LifeCycle
