import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [formState, setFormState] = useState(false);
  //expenseForm 컴포넌트에서(자식) 만든 expenseData를 NewExpense컴포넌트로(부모) 가져오고 싶을때
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 중요한 것은 매개변수
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    onAddExpense(expenseData);
  };

  const onChangeFormState = () => {
    setFormState(!formState);
  };
  const stopEditingHandler=()=>{
    setFormState(false)
  }

  let show = <button onClick={onChangeFormState}>Add New Expense</button>;
  if (formState == true) {
    show = <ExpenseForm onSaveExpensData={saveExpenseDataHandler} stopEditingHandler={stopEditingHandler} />;
  }


  return (
    <div className="new-expense">
      {show}
      {/* onSaveExpensData (이름은 정하기 나름), 이 속성에 대한 값은 함수여야함 
      이 함수는 컴포넌트 내부에서 어떠한 일이 벌어질 경우 작동되는 함수*/}
      {/* 사용자 지정 ExpenseForm 컴포넌트 안에 있는 onSaveExpensData속성은 값으로 이 함수를 받음*/}
      {/* 함수를 가리키기만 하는 이유는 그 함수가 ExpenseForm으로 전달되게 하기 위해서*/}
    </div>
  );
};

export default NewExpense;
