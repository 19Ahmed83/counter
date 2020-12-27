import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";

function App() {
    const [count, setCount] = useState(0)
    const plus=()=>{
        setCount(count+1);
    }
    const minus=()=>{
        setCount(count-1)
    }
    return (
        <div align='center'>
            <h1>Calculator</h1>
            <Counters count={count} plus={plus} minus={minus}/>
        </div>
    );
}

export default App;
