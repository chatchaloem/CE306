import React , {useState, useEffect} from 'react';

const NoDepencyEffect: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const [name,setName] = useState<string>('');



    useEffect (() => {
        console.log("No Dependency Effect: Component re-rendered");
        console.log(`Current Count: ${count}, Current Name: ${name}`);


    });

    return (
        <div>
            <h2>No Dependency Array Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            <br />
            <input 
                type="text" 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder = "Enter your name"
            />
            <p>Name: {name}</p>
        </div>

    );
};

export default NoDepencyEffect;