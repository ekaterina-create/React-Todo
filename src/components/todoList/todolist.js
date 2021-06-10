import React from 'react'
import TodoItem from '../todoitem/todoItem'
import './todolist.css'


function TodoList({ todos, onDeleted, onToggleDone, onToggleImportant }) {
   const elements = todos.map((item) => {
      return (
         <li className={"list-group-item list-item"} key={Math.random().toString(12).slice(2)}>
            <TodoItem key={Math.random(item.id).toString(12).slice(2)} {...item}
               onDeleted={() => { onDeleted(item.id) }}
               onToggleDone={() => { onToggleDone(item.id) }}
               onToggleImportant={() => { onToggleImportant(item.id) }}
            /></li>
      )
   })


   return (
      <ul className={"list-group todolist"}>
         {elements}
      </ul>
   )
}

export default TodoList