import React, { useEffect, useState } from 'react'

const CountView = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`count가 update ${count}`);
    });
    return <div>{ count }</div>
});

const TextView = React.memo(({ text }) => {
    useEffect(() => {
        console.log(`text가 update ${text}`);
    });
    return(
        <div>{text}</div>
    )
});

function OptimizeTest() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
        <div>
            <h2>count</h2>
            <CountView count={count}/>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <h2>text</h2>
            <TextView text={text} />
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    </div>
  )
}

export default OptimizeTest
