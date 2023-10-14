import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    return (
        <li>
            <Card class="expense-item">
                {/*use card component to shape the div like card and display children*/}
                <ExpenseDate date={props.date}></ExpenseDate>
                {/*display date in form of calander (month, year, date) */}
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">$ {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
