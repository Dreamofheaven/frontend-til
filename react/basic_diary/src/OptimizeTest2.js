import React, { useEffect, useState } from 'react'

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`counterA가 업데이트 - count : ${count}`);
    });
    return <div>{count}</div>
});

const CounterB = ({ obj }) => {
    useEffect(() => {
        console.log(`counterB가 업데이트 - count : ${obj.count}`);
    });
    return <div>{obj.count}</div>
};

const CounterC = React.memo(({ num }) => {
    useEffect(() => {
        console.log(`counterC가 업데이트 - num : ${num}`);
    });
    return <div>{num}</div>
});

const areEqual = (preProps, nextProps) => {
    if (preProps.obj.count === nextProps.obj.count) {
        return true;
    } 
    return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

function OptimizeTest2() {

    const [count, setCount] = useState(1);
    const [obj, setOjb] = useState({
        count: 1
    });
    const [num, setNum] = useState(0);
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setOjb({ count: obj.count })}>B button</button>
      </div>
      <div>
        <h2>Counter C</h2>
        <CounterC num={num} />
        <button onClick={() => setNum(num)}>C button</button>
      </div>
    </div>
  )
}

export default OptimizeTest2
