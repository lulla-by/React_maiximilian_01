// import React from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredDate = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSaveDate={filteredDate} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
