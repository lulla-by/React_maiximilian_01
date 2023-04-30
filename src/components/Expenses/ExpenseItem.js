import React,{ useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //버튼을 클릭했을때 타이틀을 바꾸고 싶을 경우

  // let title = props.title;    //일반적인 변수

  // 컴포넌트 함수에 변수를 갖고 있고 변수가 변경되었다고(clickHandler()) 해도 리액트는 무시
  // expenseItem이라는 컴포넌트는 초기에 한번 렌더링되고 다시 호출되지 않을 것
  // => 왜냐하면 클릭하거나 변수가 변경되었을때 이 컴포넌트 함수를 다시 실행하라고 트리거하지 않을것이기 때문

  // useState
  // React라이브러리에서 제공하는 함수
  // 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 깂을 정의할 수 있게 해주는 함수 => React 훅
  // 기본적인 state값 대신 useState()로 특별한 종류의 변수를 생성
  // 변수와 함께 변수에 새로운 값을 할당하기 위해 호출할 수 있는 함수를 반환

  // React훅은 리액트 컴포넌트 함수 안에서 호출되어야 함

  const [title,setTitle] = useState(props.title)

  // 상수(const)사용하는 이유
  // 1) useState를 호출해서 리액트에게 어떤 값을 관리해야한다고 선언함
  // 2) 변수 자체는 볼 수 없고 함수만 호출함. 
  // 3) 그리고, 절대 등호연산자로 title에 새로운 값을 할당하지 않음 
  //    => 그래서 상수형을 써도 괜찮음

  const clickHandler = ()=>{
    setTitle("updated!") 
    // 어떤 변수에 새로운 값을 할당하는 것이 아닌 useState로 만든 특별한 변수로 시작
    // state를 업데이트하는 함수 => useState로 상태를 초기화했던 곳에서 다시 실행되게 됨
    // => 일반적인 변수의 업데이트로는 안되던 컴포넌트 함수의 재호출하고 jsx코드를 다시 평가, 화면에 렌더링
    
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div> 
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
