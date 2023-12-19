import './App.css';
import { useState } from 'react';

function App() {
    const [lists,setLists] = useState ([
      {text:'HTML'},
      {text:'CSS'},
      {text:'JS'},
    ])

const [value,setValue] = useState('')  

  return (
    <div className="App">
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>{
        if (value.trim()!== "") {
            setLists([...lists,{text:value}])
        }
        setValue('')
      }}>Add list</button>
      <ul >
        {lists.map((e,i)=><li>{e.text} <button onClick={()=>{
          setLists([...lists].filter((e,ind)=>ind!==i))
        }}>X</button></li>)}
      </ul>
    </div>
  );
}

export default App;
