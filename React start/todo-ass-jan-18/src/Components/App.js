


import React, { useState } from "react";


import CreateToDo from "./CreateToDo";

import DisplayTodo from "./DisplayTodo";




const App = ()=>{

    
        const [todoList, setTodoList] = useState([])

        



    return (


        <div>
       <CreateToDo setTodoList={setTodoList} 
       todoList = {todoList}/>

       <DisplayTodo  todoList ={todoList}
       setTodoList={setTodoList}/>

        </div>
    )
}

export default App;