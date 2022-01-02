import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from 'react'




const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    //transfer data to App.js
    props.onAddExpense(expenseData);
  };

  const startEditingHander = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () =>{
    setIsEditing(false);
  };


  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHander}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={stopEditingHandler}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
