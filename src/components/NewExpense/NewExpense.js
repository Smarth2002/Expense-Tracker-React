import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    function startEditingHandler() {
        setIsEditing(true);
    }

    function stopEditingHandler() {
        // display button (add new expense) instead of form again without submitting
        setIsEditing(false);
    }

    function saveExpenseDataHandler(enteredExpenseData) {
        // recieve data from child component 

        // add id property to each object before passing to parent
        const expenseData = {
            id: Math.random(),
            ...enteredExpenseData,
        };

        // pass to parent component by calling func passed as prop
        props.onAddExpense(expenseData);

        // display button (add new expense) instead of form again after submitting
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {/* show add new expense button initially and if clicked display form using state (isEditing)
            and conditional rendering */}
            {/* passed stopEditingHandler to form to set isEditing state to false from child component by 
            calling function of parent component by passing it as prop */}
            {isEditing ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            ) : (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {/* render expense form and pass function as prop to trigger on submit event to get data from 
            child component (ExpenseForm) to parent component (NewExpense) */}
        </div>
    );
}

export default NewExpense;
