import Chart from "../Chart/Chart";

function ExpensesChart(props) {
    // plot bar for each month...fill each month acc to total amount of expenses in that month
    // in relation to maximum amount of expense in any month

    // so pass expense amount for each month as well as month in form of objects to chart component
    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    // iterate through filteredExpenses and for each expense add its amount to its respective month object in chartDataPoints
    for (const expense of props.expenses) {
        const expenseMonth = [expense.date.getMonth()]; // 0->jan, 1->feb, ...
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
