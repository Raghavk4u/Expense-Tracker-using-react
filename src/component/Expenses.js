import Card from "./UI/Card";
//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./Expenses/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./Expenses/ExpensesList";
import ExpenseChart from "./Expenses/ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
