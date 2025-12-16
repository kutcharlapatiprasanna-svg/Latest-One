


import React, { useState } from "react";





// const ToDodata = [

//     {
//         id: 1,
//         title: "Task 1",
//     },

//     {
//         id: 2,
//         title: "Task 2",
//     },

//     {
//         id: 3,
//         title: "Task 3",
//     },
// ]



const CreateToDo = ({ todoList, setTodoList }) => {

    const [todo, setTodo] = useState(``)

    // todoList = [
    //     { id: 1, title: "Buy Milk" },
    //     { id: 1, title: "Buy bread" },
    //     { id: 1, title: "Buy Butter" }
    // ]

    // const [todoList, setTodoList] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        let lastElment = todoList[todoList.length - 1]

        let lastId = lastElment? lastElment.id:0


        let obj = {
            id: lastId + 1,
            title: todo
        }
        setTodoList([...todoList, obj])

        setTodo('');


    }



    return (

        <div>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Enter ToDo"

                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add ToDo</button>


            </form>
        </div >

    )

}

export default CreateToDo;