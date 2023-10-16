import React, {useState} from 'react'
import Container from './Container';
import Todo from './Todo';
import Card from 'react-bootstrap/Card';

function List() {
    const [todos, setTodos] = useState ([]);

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
    return;
  }

const newTodo = [todo, ...todos];

setTodos(newTodo);
console.log(...todos);
}; 

const editItem = (oldValue, newValue) => {
   if(!newValue.text || /^\s*$/.test(newValue.text)){
    return;
   }
   setTodos(prev => prev.map(item => 
  (item.id === oldValue ? newValue : item)));
};

const removeItem = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id);
  setTodos(removeArr);
};

const completeTodo = id => {
  let todoUpdate = todos.map(todo=>{
    if (todo.id === id){
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
  setTodos(todoUpdate);
};

return (
  <Card className='box'>
      <Card.Body>
      <Card.Title className='title'>To-Do List</Card.Title>
      <Container onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} 
      removeItem={removeItem} editItem={editItem}/>
      </Card.Body>
    </Card>
 //</div>
)
}

export default List;