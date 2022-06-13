
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import "./ExpenseItem.css";
//we are now importing a special thing from the react liberary
//deze is niet nodig maar was vroegha wel importatn
// import React from 'react';
import React, {useState} from 'react';

  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = 234.43;
  // all on-stuff wants a function 
  // variable which changes does normally not matter for react
  // the overal function is not called again because a variable changed
  // useState is a Hook, should be in a funciton, not outside, not in nested
  // all Hooks have a use at the beginning
  // setTitle is a special kind of variable 
  //---and we want to perform the function again, when the state changes
  //useState - react voert de functie opnieuw uit als de state verandert wordt
  //state is a keyconcept in react
  //useState registers some stat (some value as state) for the component in which it is beeing called
  // State is seperated on a per componant instance basis


const ExpenseItem = (props) => {


  const[title, setTitle]  = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };


  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
