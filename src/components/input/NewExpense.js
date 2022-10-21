import React from "react";
import InputForm from "./InputForm";
const NewExpense = (props) =>{
    const savedata= (enteredvalue) => {
        const data = {
          ...enteredvalue,
          id: Math.random().toString()
        };
        props.onAdd(data);
      };
    return (
        <InputForm onSave ={savedata}></InputForm>
    );
};
export default NewExpense;