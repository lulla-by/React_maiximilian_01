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
            // key={item.id}
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
