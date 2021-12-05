import React, {useState} from 'react';
import CounterBlock from "./components/CounterBlock";

function App() {
    const [number, setNumber] = useState<number>(0);

    return (
        <CounterBlock number={number} setNumber={setNumber}/>
    );
}

export default App;
