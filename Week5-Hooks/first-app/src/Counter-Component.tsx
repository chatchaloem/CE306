import React , {useState} from "react";


interface CounterProps{
initailCount?: number;
}

const Counter: React.FC<CounterProps> = ({initailCount = 0}) => {
    const [count,setCount] = useState<number>(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount(count -1);
    }

    const Reset = () => {
        setCount(0);
    }

    return(
        <div style={{ padding: '20px' , textAlign: 'center'}}>
            <h2>Counter Exercise - Solution</h2>
            <h1 style={{color:'blue'}}>{count}</h1>
            <div style={{margin: '20px 0'}}>
            <button style={{margin:'10px 10px',backgroundColor:'#47E67E'}} onClick={increment}>+ เพิ่ม</button>
            <button style={{margin:'10px 10px', backgroundColor:'#E6472C'}} onClick={decrement}>- ลด</button>
            <button style={{margin:'10px 10px', backgroundColor:'#F78100',}} onClick={Reset}>🔁Reset</button>
            </div>
        </div>
    );   
};

export default Counter;