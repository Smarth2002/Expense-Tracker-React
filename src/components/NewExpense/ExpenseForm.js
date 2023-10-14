import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [userInput, setUserInput] = React.useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    function changeHandler(event) {
        const { name, value } = event.target;

        setUserInput((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        // create new object {title(string), amount(number), date(object) from the userInput state
        // to pass it to parent} because in current state we have all fields as string
        const { enteredTitle, enteredAmount, enteredDate } = userInput;

        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData); // pass data to parent by calling func passed as prop

        // reset the current state
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        name="enteredTitle"
                        type="text"
                        onChange={changeHandler}
                        value={userInput.enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        name="enteredAmount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={changeHandler}
                        value={userInput.enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        name="enteredDate"
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={changeHandler}
                        value={userInput.enteredDate}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
