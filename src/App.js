import React from "react";
import Expenses from "./components/Expenses/Expenses.jsx";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", price: 100, date: new Date(2025, 4, 5) },
  { id: "e2", title: "Toilet paper", price: 2, date: new Date(2022, 8, 20) },
  {
    id: "e3",
    title: "Online course",
    price: 210,
    date: new Date(2023, 12, 21),
  },
  { id: "e4", title: "Food", price: 2.15, date: new Date(2025, 4, 5) },
];

function App() {
  const [expenses, setExpenses] = React.useState(DUMMY_EXPENSES)
  
  const addExpenses = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <Expenses expenses={expenses} addExpenses={addExpenses} />
  );
}

export default App;
