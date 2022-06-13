//deze is niet nodig maar was vroegha wel importatn
// import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import "./ExpenseItem.css";
//we are now importing a special thing from the react liberary
import React, {useState} from 'react';

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = 234.43;
  // all on-stuff wants a function 
  // variable which changes does normally not matter for react
  // the overal function is not called again because a variable changed
  // useState is a Hook, should be in a funciton, not outside, not in nested
  // all Hooks have a use at the beginning
  // useState is a special kind of variable
  // 


  let title = props.title;

  const clickHandler = () => {
    title = 'Updated'
    console.log('Clicked!');
  };


  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="eexpense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler()}>Change</button>
    </Card>
  );
}

export default ExpenseItem;
