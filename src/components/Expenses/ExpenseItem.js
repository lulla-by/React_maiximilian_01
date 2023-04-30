// import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //버튼을 클릭했을때 타이틀을 바꾸고 싶을 경우
  let title = props.title;
  // 컴포넌트 함수에 변수를 갖고 있고 변수가 변경되었다고(clickHandler()) 해도 리액트는 무시
  // expenseItem이라는 컴포넌트는 초기에 한번 렌더링되고 다시 호출되지 않을 것
  // => 왜냐하면 클릭하거나 변수가 변경되었을때 이 컴포넌트 함수를 다시 실행하라고 트리거하지 않을것이기 때문
  const clickHandler = ()=>{
    title =  "updated!"
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
