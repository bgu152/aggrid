import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridColumn } from 'ag-grid-react/lib/shared/agGridColumn';


function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const columns = [
    { headerName: 'Description', field: 'description', sortable: true,filter: true,floatingFilter: true, },
    { headerDate: 'Date', field: 'date', sortable: true,filter: true,floatingFilter: true },
    {
      headerPriority: 'Priority', field: 'priority', sortable: true, filter: true,floatingFilter: true,
      cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
    }
  ];
  return (
    <div >
      <div style={{ marginLeft: '300px' }}>
        <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
        <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
        <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="ag-theme-material"
        style={{
          height: '700px',
          width: '80%',
          margin: 'auto'
        }}>
        <AgGridReact
          columnDefs={columns}
          rowData={todos}
          animateRows={true} >
        </AgGridReact>
      </div>
    </div>
  );
};

export default Todolist;