## 💛기본 일기장💛

<h3>Point 1. 사용자 입력 및 배열 리스트 처리하기</h3>
    <h4>____🚩 다양한 사용자 입력 처리하기</h4>
    <div class="list-box">
      <ul>
        <li>한 줄 입력 처리하기 </li>
        <li>여러 줄 입력 처리하기 </li>
        <li>선택 박스 입력 처리하기 </li>
        <li>사용자 입력 처리하기 </li>
      </ul>
    </div>
    <h4>____🚩 DOM 조작하기</h4>
    <ul>
      <li>useRef를 사용하여 특정 DOM 선택</li>
    </ul>
    <h4>____🚩 리스트 렌더링하기</h4>
    <ul>
      <li>시간 관련 : new Date(item.created_at).toLocaleString()
        -> 밀리세컨으로 저장된 시간을 사람이 알아볼 수 있는 시간으로 바꿔줌
      </li>
    </ul>
    <h4>____🚩 리스트 데이터 추가하기</h4>
    <ul>
      <li>배열을 이용하여 react의 list에 아이템을 동적으로 추가하기</li>
    </ul>
    <h4>____🚩 리스트 데이터 수정하기</h4>
    <ul>
      <li>배열을 이용하여 react의 list에 아이템을 동적으로 수정하기</li>
    </ul>

```javascript
setData(data.map((item) => item.id === targetId ? {...item, content: newContent} : item)
```

<h3>Point 2. React Lifecycle과 API</h3>
<span>> <strong>React Lifecycle은 클래스형 컴포넌트에서 사용한다.</strong> 그러나, 클래스형 컴포넌트는 코드가 길어지고, 중복이 많아지는 단점이 있기 때문에, 함수형 컴포넌트로 대체되고 있다.</span>
<span>함수형 컴포넌트에서 React Lifecycle을 사용하기 위해서 'React Hooks를 사용한다. 리액트 훅으로 상태관리한다.</span>

<h3>🚩React Hooks</h3>
<span>> use 키워드를 붙여서 함수처럼 사용 가능하다. </span>
<span>ex) useState, useRef, useEffect 등</span>
<h4>그 중에서 우리는 <strong>useEffect</strong>를 사용할 것이다.</h4>

<br/>

<ul>
  <li>Mount : 화면에 나타나는 것</li>
  <li>Update : 업데이트(리렌더)</li>
  <li>UnMount : 화면에서 사라지는 것</li>
</ul>

<span>관련 코드</span>
```javascript
useEffect(() => {
  console.log('Mount!')
  // call back 함수 안에서 실행할 것들
}, [])  // Dependency Array(의존성 배열) : 이 배열 내에 들어있는 값이 변화하면, 콜백함수가 실행된다.
```

<h3>Point 3. React App 프로처럼 성능 최적화하기 with 도구 사용</h3>
<h3>Point 4. React 컴포넌트 트리에 전역 데이터 공급하기</h3>

