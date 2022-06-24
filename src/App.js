// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Boodschappen",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Nieuwe Telefoon", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Verzekeringen",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Kantoormeubels",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
    // setExpenses([expense, ...expenses])
    console.log('In app.js');
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
