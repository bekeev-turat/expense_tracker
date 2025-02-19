import React from "react";
import "./expenseDate.css";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-EN", {
    month: "long",
  });
  const day = date.toLocaleString("en-EN", {
    day: "numeric",
  });
  return (
    <div className="expense-date">
      <p className="expense-date__day">{day}</p>
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
    </div>
  );
};

export default ExpenseDate;
