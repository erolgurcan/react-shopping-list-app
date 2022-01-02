import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
console.log("Expenses List " + props.items);

if (props.items.lenght === 0) {
    return (
        <h2>No Expense found in this year</h2>
    )
}

return (
    <ul className="expenses-list">{
        props.items.map((expense)=> 
        <ExpenseItem
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />)
    };
    </ul>   
    )};

export default ExpensesList;
