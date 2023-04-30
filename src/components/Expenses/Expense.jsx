// import React from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = (props) => {

  const [filteredYear,setFilteredYear] = useState("2020")
  const filteredDate = year => {
    setFilteredYear(year)
  }
  return (
    <div>
    <ExpensesFilter selected={filteredYear} onSaveDate = {filteredDate}/>
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
        
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </Card>
    </div>
  );
};

export default Expense;
