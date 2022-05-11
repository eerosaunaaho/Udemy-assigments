import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formState, setformState] = useState(false);

  const titleChangeHandler = (event) => {
    /*     console.log(event.target.value); */
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    /*     console.log(event.target.value); */
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    /*     console.log(event.target.value); */
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData.title);
    console.log(expenseData.amount);
    console.log(expenseData.date);

    props.onSaveExpenseData(expenseData);
    setformState(false);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    if (formState) {
      setformState(false);
    } else setformState(true);
  };

  return (
    <div>
      <div>
        {formState && (
          <div>
            <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                  ></input>
                </div>
                <div className="new-expense__control">
                  <label>Amount</label>
                  <input
                    type="number"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    min="0.00"
                    step="0.01"
                  ></input>
                </div>
                <div className="new-expense__control">
                  <label>Date</label>
                  <input
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    min="2019-01-01"
                    max="2024-12-31"
                  ></input>
                </div>
              </div>
              <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="new-expense__actions">
        {!formState && (
            <button onClick={submitHandler2}>Add New Expense</button>
        )}
        {formState && (
            <button onClick={submitHandler2}>Cancel</button>
        )}
      </div>
    </div>
  );
};

export default ExpenseForm;
