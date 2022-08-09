import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <header className='title'>
      ✨ Iza's To Do List ✨
      </header>
      <article className="container">
        <Form refresh={refresh} setRefresh={setRefresh} setFilter={setFilter} />
        <ToDoList refresh={refresh} setRefresh={setRefresh} filter={filter} />
      </article>
    </div>
  );
}

export default App;
