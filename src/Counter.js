import { React, useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counter <= 0) {
            return;
        } else {
            setCounter(counter - 1);
        }
        // setCounter(count => count - 1);
    };

    return (
        <div className="row align-items-center">
            <button className="col btn btn-sm" onClick={decrease}><p className="h4">-</p></button>
            <p className="col h4">{counter}</p>
            <button className="col btn btn-sm" onClick={increase}><p className="h4">+</p></button>
        </div>
    )
}

export default Counter;