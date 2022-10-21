import React from "react";
import ExpenseItem from "./components/expense/ExpenseItem";
import NewExpense from "./components/input/NewExpense";
const json = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
const Addit = (data) => {
  console.log(data);
};
const App = () => {
  return (
    <div>
    <NewExpense onAdd={Addit}/>
    <ExpenseItem  
      title={json[0].title}
      amount={json[0].amount}
      date={json[0].date}
    ></ExpenseItem>
    <ExpenseItem  
      title={json[1].title}
      amount={json[1].amount}
      date={json[1].date}
    ></ExpenseItem>
    <ExpenseItem  
      title={json[2].title}
      amount={json[2].amount}
      date={json[2].date}
    ></ExpenseItem>
    </div>
  );
};

export default App;
