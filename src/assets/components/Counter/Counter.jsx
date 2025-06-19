import { useState } from 'react';

function Counter() {
    const [count, setCount ] = useState(0);
    return (
        <div>
            <p>
                Conteggio: {count}
                <button onClick={() => setCount(count+1)}>Aumenta</button>
            </p>
        </div>
    )
}

export default Counter;