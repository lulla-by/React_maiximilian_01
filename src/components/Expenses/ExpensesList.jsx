import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"


const ExpensesList = props => {


  // 아이템이 없다면 아주 다른 jsx 코드 조각을 반환하도록하는 조건부렌더링
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback '> Found no expenses</h2>
  }
  return (
    <ul className='expenses-list'>
{props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ))}
    </ul>
  )
}

export default ExpensesList