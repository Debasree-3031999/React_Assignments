import {useState} from "react"
import Todoitem from "./Todoitem";
import {nanoid} from "nanoid"
const Todolist =()=>{
    const [task,settask] = useState("");
    const [todo,settodo] = useState([]);

    const handleChange = (e) => {
        console.log(e.target);
        settask(e.target.value);

    };

    const handleclick=()=>{
        const taskobj={
            title:task,
            status:false,
            id:nanoid()

        }
        settodo([taskobj,...todo])
    }

    return (
        <>
            <input 
            type="text" placeholder="enter task" value={task}
            onChange={handleChange} />

            <button onClick={handleclick}>+</button>
            {todo.map(item=>{
                return  <Todoitem key={item.id} item={item}/>
            })}
            
        </>
    )
}

export default Todolist 