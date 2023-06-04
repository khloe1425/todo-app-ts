import React from 'react'
import { TTodoItem } from '../../App'
import './ListTodo.css'

type Props = {
    todos: TTodoItem[], // Array<TTodoItem>
    setTodos: React.Dispatch<React.SetStateAction<TTodoItem[]>>,
}

function ListTodo(props: Props) {

    const handleDeleteTodo = (id: TTodoItem['id']) => {
        props.setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.id !== id)
        })
    }

    const handleChangeStatus = (event: any, id: TTodoItem['id']) => {
        console.log({ event });
        // tim duoc todo can change status;
        props.setTodos((prevTodo) => {
            const todo = prevTodo.find(todo => todo.id === id) as TTodoItem;
            todo.complete = !todo.complete;

            return [...prevTodo]; 
        })
    }

    const renderTodo = () => {
        return props.todos.map((item) => {
            return <li key={item.id}>
                <input onClick={(event) => handleChangeStatus(event, item.id)} type='radio' checked={item.complete} />
                <span>
                    {item.value}
                </span>
                <button onClick={() => handleDeleteTodo(item.id)}>
                    Xóa
                </button>
            </li>
        })
    }

    return (
        <div className='list-todo'>
            <ul>
                {renderTodo()}
            </ul>
        </div>
    )
}

export default ListTodo