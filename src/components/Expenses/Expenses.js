import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Extra-Files/ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.data.map((x) => (
          <ExpenseItem
          key={x.id}
          filter={filteredYear}
          title={x.title} 
          amount={x.amount} 
          date={x.date}
          />
      ))}
    </div>
  );
}

export default Expenses;
