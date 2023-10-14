import "./ExpensesFilter.css";

function ExpenseFilter(props) {
    function dropdownChangeHandler(event) {
        props.onChangeFilter(event.target.value); // pass the selected year to parent component (expenses) on change
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                {/* current component receive value of selected year from parent component expenses for 2 way binding
                (i.e. value of select is binded to parent state (filteredYear) to make it controlled) */}
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {/*dropdown list to chose years */}
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
