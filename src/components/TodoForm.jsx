import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo();

    const add= (e) =>{
        e.preventDefault();

        if(!todo)   return 

        // addTodo({id:Date.now(),todo:todo,completed:false}) but 
        // naye syntax ke andar field ka name or value ka name same hai toh ek baar pass kr skte hai below 

        addTodo({todo,completed:false})

        setTodo("")
        
    }

    // we are doing wiring between the variables via value={todo} and if something changes then i will simply pass onChange method 
    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

