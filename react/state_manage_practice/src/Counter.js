import { useEffect, useMemo, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(1);

     const add1 = () => {
        setCount(count + 1);
     };
     const add10 = () => {
        setCount(count + 10);
     };
     const add100 = () => {
        setCount(count + 100);
     };
     const add1000 = () => {
        setCount(count + 1000);
     };
     const add10000 = () => {
        setCount(count + 10000);
     };

     console.log(`이거 실행되냐? : ${count}`);

     useEffect(() => {
        console.log('useEffect 실행되냐?');
     },[]);

     return(
        <div>
            {count}
            <button onClick={add1}>add 1</button>
            <button onClick={add10}>add 10</button>
            <button onClick={add100}>add 100</button>
            <button onClick={add1000}>add 1000</button>
            <button onClick={add10000}>add 10000</button>
        </div>
     )
};

export default Counter