import React from "react";
import '../../assets/style.css'
import ExpenseDate from "../ExpenseDate";

const ExpenseItem = ({title, price, date}) => {
  return (
    <div className="expense-item">
       <ExpenseDate date={date} />
      <h2>{title}</h2>
      <p className="expense-item__price">{price}$</p>
      </div>
  );
};

export default ExpenseItem;
