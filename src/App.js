
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [result, setResult] = useState("");

  const[isempty1, setEmpty1] = useState(true);
  const[isempty2, setEmpty2] = useState(true);

  const [validation, setValidation] = useState(false);

  const[showResult, setShowResult] = useState(false);

  const [showError, setShowError]= useState(false);
  
  const [errorName, setErrorName] = useState("");

  const setError= ()=>{
      if(input1=="" && input2==""){
      setEmpty1(true);
      setEmpty2(true);
      }
      else if(input1==""){
        setEmpty1(true);
      }
      else if(input2==""){
        setEmpty2(true);
      }
      else if(isNaN(input1)){
        setErrorName("Enter number at Input1")
      }
      else if(isNaN(input2)){
        setErrorName("Enter number at Input2")
      }
  }
  const handleInput1= (e)=>{
    if(e.target.value != ""){
      setEmpty1(false);
    }
      setInput1(e.target.value);
  }

  const handleInput2= (e)=>{
    if(e.target.value != ""){
      setEmpty2(false);
    }
    setInput2(e.target.value);
}

const validateInputs= ()=>{
            if(!isNaN(input1) && input1.trim() !== "" && !isNaN(input2) && input2.trim() !== ""){
                 setValidation(true);
                 return true;
            }
            else{
              setValidation(false);
              return false;
             
            }
            
}


const addition=  ()=>{
      if(validateInputs(input1,input2)){
        let inp1=Number(input1);
        let inp2=Number(input2);

        console.log(inp1+" "+inp2);
        console.log(validation);

        setResult(inp1+inp2);
        setShowResult(true);
        setShowError(false);
      }
      else{
        setShowResult(false);
        setError();
        setShowError(true);
      }
  }

  const substraction =  ()=>{
    if(validateInputs(input1,input2)){
      let inp1=Number(input1);
      let inp2=Number(input2);

      console.log(inp1+" "+inp2);
      console.log(validation);

      setResult(inp1-inp2);

      setShowResult(true);
      setShowError(false);
    }
    else{
      setShowResult(false);
      setError();
      setShowError(true);
    }
}

const multiplication=  ()=>{
  if(validateInputs(input1,input2)){
    let inp1=Number(input1);
    let inp2=Number(input2);

    console.log(inp1+" "+inp2);
    console.log(validation);

    setResult(inp1*inp2);
    setShowResult(true);
    setShowError(false);
  }
  else{
    setShowResult(false);
    setError();
    setShowError(true);
  }
}

const divide=  ()=>{
  if(validateInputs(input1,input2)){
    let inp1=Number(input1);
    let inp2=Number(input2);

    console.log(inp1+" "+inp2);
    console.log(validation);

    setResult(inp1/inp2);
    setShowResult(true);
    setShowError(false);
  }
  else{
    setShowResult(false);
    setError();
    setShowError(true);
  }
}
  return (
    <div className='glow-box'>
      <h1>React Calculator</h1>

      <input type='text' placeholder='INPUT1' onChange={handleInput1} style={{ tabSize:'30%' }}></input>
      <br></br>
      <input type='text' placeholder='INPUT2' onChange={handleInput2}></input>
      <br></br>
      <button className='button' onClick={addition}>+</button>
      <button className='button' onClick={substraction}>-</button>
      <button className='button' onClick={multiplication}>x</button>
      <button className='button' onClick={divide}>/</button>

      
       {
        showResult==true? <div><h1 style={{ color: 'green' }}>Success!</h1> <h4> Result-YOUR_RESULT {result}</h4></div> : <></>
        
       }

       {
        showError==true? <div><h2 style={{ color: 'red' }}>Error!</h2> <h4>{errorName}</h4></div>: <></>
       }

       {
        isempty1==true? <h4>Num1 cannot be Empty</h4>: <></>
        
       }

       {
        isempty2==true? <h4>Num2 cannot be Empty</h4>: <></>
       }

      <h1>{isempty1}</h1>
    </div>
  );
}

export default App;
