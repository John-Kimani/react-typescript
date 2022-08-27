import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos,setTodos] = useState<ToDo[]>([])

  console.log(todo)

  return  <div className="App">
    <span className='heading'>Taskify</span>
    <InputField todo={todo} setTodo={setTodo}/>
  </div>;
}

export default App;
