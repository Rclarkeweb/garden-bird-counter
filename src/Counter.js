import { React, useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1);
    };

    return (
        <div className="row align-items-center">
            <button className="col btn btn-success btn-sm" onClick={decrease}><p class="h4">-</p></button>
            <p className="col h4">{counter}</p>
            <button className="col btn btn-success btn-sm" onClick={increase}><p class="h4">+</p></button>
        </div>
    )
}

export default Counter;