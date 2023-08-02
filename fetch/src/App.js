import './App.css';
import React,{useState,useEffect} from "react"

function App() {

const [data,setData]=useState([])

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())
  .then((response)=>setData(response))}
  ,[])

  return (
    <div className="App">
      <table>
        <thead><th>ID</th><th>name</th><th>username</th><th>email</th></thead>
        {
          data.map((e,i)=>{
           return (<tr><td>{e.id}</td><td>{e.name}</td><td>{e.username}</td><td>{e.email}</td></tr>)
          })
        }
        </table>
    </div>
  );
}

export default App;
