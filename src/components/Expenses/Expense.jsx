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
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSaveDate={filteredDate} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expense;
