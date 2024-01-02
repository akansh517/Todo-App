import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './components';

function App() {
  const[todos,setTodos] = useState([]);

  // todo ke andar 3 values hai toh direct 3 values de nhi skta toh  object dunga or us object ke andar id dunga so id ko dynamic banane ke liya date ko le liya 
  const addTodo = (todo)=>{
    setTodos((prev) => [{id:Date.now() , ...todo},...prev])
  }

  // ham find kar rahe hai konsa aisa todo hai jo match kr raha hai id se toh uske andar hum uske according values pass krenge
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id ? todo: prevTodo)))
  }

    // also we can do the below syntax 
    // prev.map((eachVal)=>{
    //   if(eachVal.id===id){
    //     todo
    //   }
    // })

    // deleteTodo 
    // jo match nhi krega vo aata jaega mera array main or jo match kr jaega vo nhi ayega bcz filter method always returns true value

    const deleteTodo=(id)=>{
      setTodos((prev)=> prev.filter((todo) => todo.id!==id))
    }

    // values sari le lange or completed vali ko override kr denge just 
    const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id? {...prevTodo, completed: !prevTodo.completed} :prevTodo))
    }

    // Local storage functionality
    // the local storage in the React,javascript is the browser local storage basically i.e setItem and getItem
    // and it allows us to put the values in the key value pairs 
    // and all the values are in the string format and we have to convert the values into the json format sometimes

    // application jab load hoti hai toh konsa fxn hai jo query kr skta hai localStorage se yaa koi fxn bana de ki ye call krke fxn Storage main jaoor sari values lekar aao or usko todos main daal do i.e useEffect


    // local Storage directly access kr skte hai jab tak react main hai or jab tak hum server side rendering ki baat nhi kr rahe 
    // set krte time batana padega ki key kya rakhenge or value kya rakhna 
    // or get krte time sirf key ka name rakhenge os mil jaegi value 
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length>0){
        setTodos(todos)
      }
    }, [])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                      <div className="mb-4">
                          {/* Todo form goes here */} 
                          <TodoForm/>
                      </div>
                      <div className="flex flex-wrap gap-y-3">
                          {/*Loop and Add TodoItem here */}
                          {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                            </div>
                          ))}
                      </div>
                  </div>
              </div>
          </TodoProvider>
  )
}

export default App
