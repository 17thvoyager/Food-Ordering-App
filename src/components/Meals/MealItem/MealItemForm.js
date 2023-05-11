import React,{useRef, useState} from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js'

const MealItemForm = (props) => {
  const[amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amoutInputRef.current.value; // gets a number in a string
    const enteredAmountNumber = +enteredAmount; // converted  to a number by adding +to the var

    if (
      enteredAmount.trim().length === 0 ||   // why this complicated ?
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}       
          label="Amount"
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    );
}

export default MealItemForm;