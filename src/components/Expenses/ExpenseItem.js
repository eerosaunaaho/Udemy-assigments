import React from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  /* console.table(props); */
  console.log(props.date.getFullYear() + ' get year value')
  console.log(props.filter + ' filter value')

  if (parseInt(props.date.getFullYear()) === parseInt(props.filter) || props.filter === "all") {
    return (
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
