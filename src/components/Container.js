import React, {useState, useEffect, useRef} from 'react';
import {Button} from 'react-bootstrap';

function Container(listComps) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleAdd = e => {
        e.preventDefault();
    
    listComps.onSubmit({
        id: Math.floor(Math.random() * 5000), text: input
    });
    setInput('');
};
  return (
    <form className= "content" onSubmit={handleAdd}>
        <input type= "text" placeholder="Write a task" value= {input}
        name= 'text' className='todoInput'
        onChange={handleChange}
        ref={inputRef}
    />
           <Button type="submit" className="addButton">Add</Button>
    </form>
  );
}

export default Container;