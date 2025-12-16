import React from "react";




const DisplayTodo = ({todoList,setTodoList}) => {



    function deletetoDo(id){
       setTodoList( todoList.filter(todo =>todo.id != id))



    }







    return (



        <div>


            <h1>  Display to do</h1>

            <ul>

                {

                    todoList.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={deletetoDo}>delete</button>
                            {/* <button onClick={() => deletetoDo(todo.id)}> */}



                        </li>
                        

                    )
                    )
                }
            </ul>
        </div>
    )
}


export default DisplayTodo;