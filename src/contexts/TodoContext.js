import { createContext, useContext } from "react";


// is context ke andar hum bss ye baat kr rahe hai ki uske andar kya kya methods hai or kya-2 values i.e todos hai 
export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    // only write the names and not functionality and we write fxnality in app.js 
    addTodo: (todo) => {},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id) =>{}
})


// useContext ko hamesha context dena padega context means kis chiz ke bare main baat kar rahe hai i.e sandarbh

export const useTodo = () =>{
    return useContext(TodoContext);
}



export const TodoProvider = TodoContext.Provider;