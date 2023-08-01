import './App.css';
import {useState} from "react"

export default function App() {
  const [result,setresult]=useState("")
  const [input,setinput]=useState("")
  const eventhandler=(e)=>{
    setinput(e.target.value)
  }

  return (
    <center>
          <div className="App">
        <input type="text" value={input} onChange={eventhandler}/>
        <h1>Result:{result}</h1>
        <button type="button" onClick={()=>setresult(eval(input))}>calculate</button>
    </div>
    <div>
    <button onClick={()=>setinput(input+"1")}>1</button>
    <button onClick={()=>setinput(input+"2")}>2</button>
    <button  onClick={()=>setinput(input+"3")}>3</button>
    <button onClick={()=>setinput(input+"4")}>4</button>
    <button onClick={()=>setinput(input+"5")}>5</button>
    <br/>
    <button onClick={()=>setinput(input+"6")}>6</button>
    <button onClick={()=>setinput(input+"7")}>7</button>
    <button onClick={()=>setinput(input+"8")}>8</button>
    <button onClick={()=>setinput(input+"9")}>9</button>
    <button onClick={()=>setinput(input+"0")}>0</button>
    <br/>
    <button onClick={()=>setinput(input+"+")}>+</button>
    <button onClick={()=>setinput(input+"-")}>-</button>
    <button onClick={()=>setinput(input+"*")}>*</button>
    <button onClick={()=>setinput(input+"/")}>/</button>
    <button onClick={()=>setinput("")}>clear</button>
    </div>
    
    </center>
  );
}


