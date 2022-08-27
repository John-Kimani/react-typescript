import React from 'react'
import './styles.css'
import { ToDo } from '../model'

interface Props{
    todos:ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const TodoList : React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <li>{todo.todo}</li>
        ))}
    </div>
  )
}

export default TodoList