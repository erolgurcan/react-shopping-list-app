import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  console.log (props.items)
  const [filteredYear, setFilteredYear] = useState("2000");

  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHander}
        ></ExpensesFilter>
        <ExpensesList items = {filteredExpenses}> </ExpensesList>
        {/* Alternative No Expense Found
        {filteredExpenses.length ===0 && <p>No Expenses found</p>} */}
        {/* Filtering and Mapping Array */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};
export default Expenses;
