import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear() === Number(filteredYear);
    });

    return (
        <div>
            <Card class="expenses">
                {/* drop down menu to select year, made it controlled (2 way binding) by passing year as prop and recieve year from it */}
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                {/* display chartbars of all months of filteredYear */}
                <ExpensesChart expenses={filteredExpenses} />

                {/* store a message if no items for a particular year or expense items if there are items present
                for a particular year */}
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
