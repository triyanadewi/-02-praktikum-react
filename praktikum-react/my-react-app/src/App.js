//import React from 'react'; 
import Counter from './Counter';
import Greeting from './Greeting';

import React, { useState } from 'react'; 

function Example() { 
  const [name, setName] = useState(''); 
  const [age, setAge] = useState(0); 
  const [email, setEmail] = useState(''); 

  const handleNameChange = (e) => { 
    setName(e.target.value); 
  }; 

  const handleAgeChange = (e) => { 
    setAge(e.target.value); 
  };

  const handleEmailChange = (e) => { 
    setEmail(e.target.value); 
  };

  return ( 
    <div> 
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="Umur" value={age} onChange= {handleAgeChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /> 
      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p> 
    </div> 
  ); 
}

// Komponen Header 
function Header() { 
  return ( 
    <header> 
      <h1>Aplikasi React Saya</h1> 
    </header> 
  ); 
} 

// Komponen Main 
function Main() { 
  return ( 
    <main> 
      <h2>Selamat datang di Aplikasi React Saya!</h2> 
      <p>Ini adalah area konten utama.</p> 
    </main> 
  ); 
} 

// Komponen Footer 
function Footer() { 
  return ( 
    <footer> 
      <p>&copy; 2025 Aplikasi React Saya</p> 
    </footer> 
  ); 
}

// Komponen Todo List (TUGAS)
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="Tambah tugas baru" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
      {tasks.length > 0 && (
        <table style={{ width: "auto", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Tugas</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{task}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <button onClick={() => handleDeleteTask(index)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table> 
      )}   
      </div>
  );
}

// Komponen App yang menggunakan Header, Main, dan Footer (tambah Counter, Greeting, Example, TodoList)
function App() { 
  return ( 
    <div> 
      <Header /> 
      <Main /> 
      <Greeting name="Triyana" />
      <Counter />
      <Example />
      <hr />
      <TodoList />
      <Footer /> 
    </div> 
  ); 
} 

export default App;