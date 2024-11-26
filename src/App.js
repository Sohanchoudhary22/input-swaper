
import { useState } from 'react';
import './App.scss';

function App() {
   const [inputValue1, setInputValue1] = useState("")
   const [inputValue2, setInputValue2] = useState("")


   const _handlesubmitbtn1 = (e)=>{
    e.preventDefault();
    if (inputValue1=== ''){
      alert("please enter input field")

    }else{
      setInputValue2(inputValue1);
      setInputValue1("");
    }
   }

   const _handlesubmitbtn2 = (e)=>{
    e.preventDefault();
    if (inputValue2=== ''){
      alert("please enter input field")

    }else{
    setInputValue1(inputValue2);
    setInputValue2("");
    }

   }

  return (
    <div className="App">
      <h1> Input Swapper</h1>
      <form>
      <div>
        <input type="text" placeholder='Input 1' value= {inputValue1}  onChange={(e) => setInputValue1(e.target.value)}/>
        <input type="text" placeholder='Input 2' value= {inputValue2}  onChange={(e) => setInputValue2(e.target.value)}/>
      </div>
      <div>
        <button type="submit1" className='btn1' onClick={_handlesubmitbtn1}>Move to 2 input</button>
        <button type="submit2" className='btn2' onClick={_handlesubmitbtn2}>Move to 1 input</button>
      </div>
      </form>
    </div>
  );
}

export default App;
