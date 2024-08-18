import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import StudentList from './components/StudentList';
import FavoritesList from './components/Favorites';

function App() {
return (
  <BrowserRouter>
<Routes>


<Route path="/" element={<StudentList/>} ></Route>
<Route path="/favorites" element={<FavoritesList/>}></Route>


</Routes>
</BrowserRouter>
);
}

export default App;
