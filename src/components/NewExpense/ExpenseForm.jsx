import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = () => {
  // 1. 여러개의 state를 가지는 방법
  const [enteredTitle,setEnteredTitle] = useState("");
  const [enteredAmount,setEnteredAmount] = useState("");
  const [enteredDate,setEnteredDate] = useState("");
  
  //2. 한개의 state를 가지는 방법 => 값을 객체로 묶기
  // const [unserInput,setUserInput] = useState({
  //   enterdTitle:"",
  //   enterdAmount:"",
  //   enterdDate:""
  // })

  const titleChangeHandler = (e) =>{
    setEnteredTitle(e.target.value);

    //1번
    // setUserInput({
    //   ...unserInput,
    //   enterdTitle:e.target.value
    // })

    //2번
    // setUserInput((prevState)=>{
    //   return {...prevState,enterdTitle:e.target.value}
    // })
  }

  // React는 상태 업데이트 스케줄을 갖고 잇어서 바로 실행하지 않음
  // 동시에 수많은 상태 업데이트를 계획한다면 1번에서는 오래되거나 잘못된 상태 스냅샷에 의존할 수 있음
  //2번을 사용할 겅우 리액트는 이 안에 잇는 함수에서 이 상태 스냅샷이 가장 최신의 스냅샷이라는 것과 
  // 항상 계획된 상태 업데이트를 염두에 두고 있다는 것을 보장함


  const amountChangeHandler = (e) =>{
    setEnteredAmount(e.target.value);
  }
  const dateChangeHandler = (e) =>{
    setEnteredDate(e.target.value);
  }

  const submitHandler=(e)=>{
    //버튼을 클릭하면 페이지가 리로드
    // => 브라우저는 폼이 제출될때마다 이 웹페이즈를 호스팅하고 있는 서버에 요청을 보내기 때문
    // 이러한 기본동작을 막는것이 preventDefault()
    e.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount: enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
        {/* 버튼의 타입이 서브밋이면 폼대신 클릭될경우 이 전체 폼 요소는 수신할 수 있는 이벤트를 생략 */}
      </div>
    </form>
  )
}

export default ExpenseForm