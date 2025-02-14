import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";


const Expenses = ({expenses}) => {
  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </>
  );
};

export default Expenses;
