// rfce
import React, { useRef, useState } from 'react';
import './Input.css';
import { TTodoItem } from '../../App';

type InputProps = {
    setTodos: React.Dispatch<React.SetStateAction<TTodoItem[]>>
}

let id = 0;

function Input(props: InputProps) {
    const [content, setContent] = useState<string>('') // dinh nghia ro rang
    // const [content, setContent] = useState('') // ngam hieu state la string
    const inputRef = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const handleAddTodo = () => {
        // kiem tra xem co nhap vao content hay chua.
        // '                 ' !== '' true;
        // '                 ' => ''
        if(content.trim() === '') { 
            return;
        }

        const todo: TTodoItem = {
            id: id,
            value: content,
            complete: false,
        };

        // props.setTodos([{}])

        props.setTodos((prev) => {
            // prev: các state hiện tại.
            console.log({ prev });
            return [
                ...prev,
                todo
            ]
        })

        id++;

        handleReset();
    };

    const handleReset = () => {
        setContent('');
        inputRef.current.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === 'Enter') { // neu nguoi dung nhan enter thi add Todo.
            handleAddTodo()
        }
    }

    return (
        <div className='main-input'>
            <input ref={inputRef} value={content} onChange={handleChange} onKeyDown={handleKeyDown} />

            <button className='btn-add-todo' onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default Input