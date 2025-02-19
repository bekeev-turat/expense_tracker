import React from "react";
import "./ExpensesForm.css";
const ExpensesForm = ({ addExpenses }) => {
  const [inputInfo, setInputInfo] = React.useState({
    title: "",
    price: "",
    date: "",
  });

  const handleChangeInputInfo = (event) => {
    const changeInfo = event.target.value;

    setInputInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: changeInfo,
      };
    });
  };
  const handleClickSubmit = () => {
    addExpenses({
      id: Math.random().toString(), 
      title: inputInfo.title,
      price: parseFloat(inputInfo.price), 
      date: new Date(inputInfo.date), 
    });

    setInputInfo({ title: "", price: "", date: "" }); 
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
          value={inputInfo.title}
            onChange={handleChangeInputInfo}
            type="text"
            name="title"
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
          value={inputInfo.price}
            min={0}
            onChange={handleChangeInputInfo}
            type="number"
            name="price"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
          value={inputInfo.date}
            min={"2021-01-19"}
            max={"2026-01-19"}
            onChange={handleChangeInputInfo}
            type="date"
            name="date"
            required
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={handleClickSubmit}>Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;
