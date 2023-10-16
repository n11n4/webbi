import React from 'react';
import './App.css';
import List from './components/List';
import { ListGroup } from 'react-bootstrap';

function App(){
  return(
    <ListGroup className='list'><List/></ListGroup>
  );
}
export default App;