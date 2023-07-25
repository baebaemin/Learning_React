import './App.css';
import React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'

function App() {

  const columns = [
    {filed : 'id', headerName : '사번', width: 90},
    {filed : 'name', headerName : '이름', width: 190},
    {filed : 'teamNo', headerName : '팀', width: 90},
  ];

  const rows = [
    { id: 1, name : '박새', teamNo : 'B207'},
    { id: 2, name : '직박구리', teamNo : 'B203'},
    { id: 3, name : '해오라기', teamNo : 'B202'},
    { id: 4, name : '참새', teamNo : 'B222'},
    { id: 5, name : '갈매기', teamNo : 'B212'},
  ];
  

  return (
    <div className="App">
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

    </div>
  );
}


export default App;
