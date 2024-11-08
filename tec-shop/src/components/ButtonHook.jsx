import { useEffect, useState } from "react";
const ButtonHook = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () =>{
        console.log('click')
        let new_counter = counter + 1;
        setCounter(new_counter) 
    }
    useEffect(() => {
        if (counter === 20) {
            alert("El contador ha superado 20!");
        }
        if (counter === 40) {
            alert("El contador ha superado los 40!")
        }
        if (counter < 0){
            alert("Solo número positivos")
            setCounter(0)
        }
    }, [counter]); 
    return (
    <div>
        <h1>Contador: {counter}</h1>
        <button onClick={handleClick}>Aumentar Contador</button>
        <button onClick={()=>(setCounter(counter -1))}>Disminuir Contador</button>
    </div>)
}
export default ButtonHook