import React, {useState} from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title,setTitle] =useState(props.title);
  const ClickHandler = () => {
    setTitle('changed');
    console.log(title)
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item h2 ">{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Click Here!</button>
    </Card>
  );
};

export default ExpenseItem;
