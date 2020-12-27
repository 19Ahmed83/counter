import React from 'react';

export default function Counters(props) {
    const{count,plus,minus}=props
    return (
        <div>
            <button onClick={minus}>-</button>
            {count}
            <button onClick={plus}>+</button>
        </div>
    );
}