import { useState } from "react"

const Comp3=()=>{

    const [count,setCount]=useState(0);

    const reset=()=>{
        setCount(0);
    }

    const handleIncrease=()=>{
        setCount(count+1);
    }

    const handleDecrease=()=>{
        if (count==0)return;
        setCount(count-1);
    }
    return (
    <>
    <h2>Component 3</h2>
    <div>{count}</div>
    <button onClick={handleIncrease}>Increase </button>
    <button onClick={handleDecrease}>Decrease </button>
    <button onClick={reset}>reset </button>
    </>
    )

}
export default Comp3