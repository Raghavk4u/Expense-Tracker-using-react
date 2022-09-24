import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setnewTitle] = useState(""); //      .... you can use this as well if you dont want to update them together!
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     newTitle: "",
  //     newAmount: "",
  //     newDate: "",
  //   });
  const inputChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   newTitle: event.target.value,
    // });
    setnewTitle(event.target.value);

    //     setUserInput((prevState)=>{                       // another way of assigning the value entered by the user using the previous state thus the updated value will be correct and will be updated from the current immediate updated value since the value updated previously will not affect the actual value immediately it takes time thus keeping the stack of the value to be updated thus using prevState which will return the immediate updated valaue....
    //         return{...prevState, newTitle: event.target.value
    //         };});
    //   };
  };
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   newAmount: event.target.value,
    // });
    // setUserInput((prevState) =>{
    //   return{
    //     ...prevState,newAmount: event.target.value
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   newDate: event.target.value,
    // });
    // setUserInput((prevState) =>{
    //     return{
    //       ...prevState,newDate: event.target.value
    //     };
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const expenseData = {
    //   title: newTitle,
    //   amount: newAmount,
    //   date: new Date(newDate),
    // };
    
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    
    //console.log(expenseData);


    props.onSaveExpenseData(expenseData);
    setnewTitle(""); //used to clear the input form after adding the value......
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value={newTitle} onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
