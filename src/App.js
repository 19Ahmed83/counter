import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";

function App() {
    const [count, setCount] = useState(1)
    const plus=()=>{
        setCount(count+2);
    }
    const minus=()=>{
        setCount(count-1)
    }
    const prod=()=>{
        setCount(count*2)
    }
    const del=()=>{
        setCount(count/2)
    }
    const clr=()=>{
        setCount(0)
    }
    return (
        <div align='center'>
            <h1>Calculator</h1>
            <Counters count={count} plus={plus} minus={minus} prod={prod} del={del} clr={clr}/>
        </div>
    );
}

export default App;
