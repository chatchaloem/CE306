import React , {useState, useEffect} from 'react';

const EmpyDepencyEffect: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const [name,setName] = useState<string>('');



    useEffect (() => {
        console.log("Empty Dependency Effect: Component Component mounted");


    }, []);

    return (
        <div>
            <h2>Empty Dependency Array </h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevcount => prevcount + 1)}>Increment Count</button>
            <br />
            <p>Name: {name}</p>
            <input 
                type="text" 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder = "Enter your name"
                />
        </div>

    );
};

export default EmpyDepencyEffect;