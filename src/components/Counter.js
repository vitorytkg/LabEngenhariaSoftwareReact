import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(1);
    return (
        <>
            <h1>Counter = {number}</h1>
            <button onClick={() => {
                setNumber(number + 5)
                setNumber(n => n + 1)
                setNumber(42)
            }}>Increment Number</button>
        </>
    );
}