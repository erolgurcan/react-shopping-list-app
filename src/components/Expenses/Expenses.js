import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2000");

  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHander}
        ></ExpensesFilter>

        {props.items.map((expense, index) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount = {expense.amount}
          date = {expense.date} />
        ))}      
      </Card>
    </div>
  );
};
export default Expenses;
