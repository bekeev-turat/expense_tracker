import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import "./expenses.css";
import Card from "../ui/Card.jsx";
import NewExpenses from "./NewExpenses.jsx";

const Expenses = ({ expenses, addExpenses }) => {
  return (
    <>
      <NewExpenses addExpenses={addExpenses} />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
