import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import './NewExpense.css';
const InputForm =(props) =>{
  const [title,settitle] = useState('');
  const [date,setdate] = useState('');
  const [amount,setamount] = useState('');
  // const [userInput,setuserInput] = useState({
  //   enterTitle: '',
  //   enterdate: '',
  //   enteramount: ''
  // });
  const titleHandler = (e) => {
    // console.log(e.target.value)
    settitle(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterTitle: e.target.value,
    // })
    // setuserInput((prevstate) =>{
    //   return {...prevstate, enterTitle:e.target.value};
    // });
  };
  const dateHandler = (e) => {
    // console.log(e.target.value)
    setdate(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterdate: e.target.value,
    // })
    // setuserInput((prevstate) =>{
    //   return {...prevstate, enterdate:e.target.value};
    // });
  };
  const amountHandler = (e) => {
    // console.log(e.target.value)
    setamount(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteramount: e.target.value,
    // })
    // setuserInput((prevstate) =>{
    //   return {...prevstate, enteramount:e.target.value};
    // });
  };
  const submitHandler = (e) =>{
    e.preventDefault();
    const save = {
      title: title,
      amount: amount,
      date: new Date(date)
    };
    props.onSave(save);
    settitle('');
    setamount('');
    setdate('');
    
  };

  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense'>
      <Form.Control type="text" placeholder="Enter Title" onChange={titleHandler} value={title}/>
      <Form.Control type="number" placeholder="Enter Amount" min="0" onChange={amountHandler} value={amount}/>
      <input type="date" min="2019-01-01" onChange={dateHandler} value={date}/>  
      <button type="submit">Add</button>   
    </div>
  </form>
  );
};

export default InputForm;
