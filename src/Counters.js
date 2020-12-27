import React from 'react';

export default function Counters(props) {
    const{count,plus,minus,prod,del,clr}=props
    return (
        <div>
            <button onClick={del}>/</button>
            <button onClick={minus}>-</button>
            {count}
            <button onClick={plus}>+</button>
            <button onClick={prod}>*</button>
            <button onClick={clr}>clear</button>
        </div>
    );
}