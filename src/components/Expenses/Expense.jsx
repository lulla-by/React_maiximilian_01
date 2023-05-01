// import React from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredDate = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSaveDate={filteredDate} />
        {/* map()을 사용한 동적 렌더링 */}
        {props.expenses.map(item => 
          <ExpenseItem
          //  새로운 아이템의 추가시 아이템이 어디에 추가되는지 알려줘야 함
          //  그래서 아이템 목록이 출력되는 곳에서 특별한 props를 추가하여 해당 작업을 실행
          //  그 특별한 props가 바로 key props
          key={item.id}
          //  키가 없을 경우에는 에러 발생 
          //  => warning: Each child in a list should have a unique "key" prop.
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        )}
      </Card>
    </div>
  );
};

export default Expense;
