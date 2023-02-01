import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(1)
    const [input, setInput] = useState('rawr')

    function incrementValue() {
        setCount((prevCount) => prevCount + 1);
        if (count >= 10) {
            setCount(10);
        }
        console.log(count)
    }
    function decrementValue() {
        setCount((prevCount) => prevCount - 1);
        if (count <= 0) {
            setCount(0);
        }
        console.log(count)
    }
    function handleOnChange(e) {
        setInput((prevInput) => e.target.value);
        console.log(input)
    }
    return (
        <div className="incre-decre">

            <button className="btn btn-danger" onClick={decrementValue}> - </button>
            <span>{count}</span>
            <button className="btn btn-warning" onClick={incrementValue}> + </button>
            <input onChange={handleOnChange} value={input}></input>

        </div>
    )

}


export default Count;