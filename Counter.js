import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <h1>Counter: {count}</h1>
            <button className="counter-button1" onClick={decrement}>Decrement</button>
            <button className="counter-button2" onClick={increment}>Increment</button>
            {count === 10 && <h2 className="max-message">Maximum limit reached!</h2>}
            {count === 0 && <h2 className="max-message">Can't Decrement below 0!</h2>}
        </div>
    );
}

export default Counter;
