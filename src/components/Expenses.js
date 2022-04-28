import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
        <div className="expenses">
        <ExpenseItem
        title = {props.title}
        amount = {props.amount}
        date = {props.date}
      />
      </div>
    );
}

export default Expenses;