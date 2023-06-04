// ctrl + shift + o: xóa những dòng import dư
import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import ListTodo from './components/ListTodo/ListTodo'

export type TTodoItem = {
  id: number;
  value: string; // content, text
  complete: boolean; // true: completed, false: inprogress
}

const __todos = [
  {
    id: 1,
    value: 'React',
    complete: false,
  },
  {
    id: 2,
    value: 'Vue',
    complete: true,
  }
]

function App() {
  const [todos, setTodos] = useState<TTodoItem[]>([])

  return (
    <div className='main-todo'>
      <div className='todo-app'>
        <Input setTodos={setTodos}/>
        <ListTodo setTodos={setTodos} todos={todos} />
      </div>
      
      {/* zindex 100 */}
      <div>

      </div>

      <div> 
        {/* zindex 10 */}
        {/* modal zIndex: 1000*/}
      </div>
    </div>
  )
}

export default App
