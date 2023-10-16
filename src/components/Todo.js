import React, {useState} from 'react';
import Container from './Container';
import {XSquare} from 'react-bootstrap-icons';
import {PencilSquare} from 'react-bootstrap-icons';

function Todo({todos, completeTodo, removeItem, editItem}) {
    const [edit, setEdit]=useState({
        id: null, value: ''
    });

    const edited = value =>{
        editItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Container edit={edit} onSubmit={edited} />;
    }
 return todos.map((todo, index) => (
    <div 
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <XSquare onClick={() => removeItem(todo.id)}
            className='delete'/>
            <PencilSquare onClick={() => setEdit({id: todo.id,
                value: todo.text})} className="edit"/>
        </div>
        </div>
 ));
}
export default Todo;