import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

  const onSaveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString
    };
      //transfer data to App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm  onSaveExpenseData = {onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
