import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
const [students, setStudents] = useState([
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie' },
]);

const addToFavorites = (student) => {
const updatedStudents = students.map(s => {
if (s.id === student.id) {
return { ...s, favorite: true };
}
return s;
});
setStudents(updatedStudents);
// Store in localStorage if needed for persistence
localStorage.setItem('students', JSON.stringify(updatedStudents.filter(s => s.favorite)));
};

return (
    <div className='bg-blue-300 p-10'>
<div className="p-10 bg-white"  >
    <div className='flex justify-between bg-blue-300 rounded-md'>
<h1 className="md:text-2xl  font-bold p-3 mb-4">List of Students</h1>
<h1 className="md:text-2xl font-bold mb-4  py-2 px-4 rounded"><Link to="/favorites" className="mt-4  text-gray-800 underline">
Favourite Students
</Link></h1>
</div>
<ul>
{students.map(student => (
<li key={student.id} className="flex items-center justify-between py-2 border-b">
<span>{student.name}</span>
{!student.favorite && (
<button
className="bg-black hover:bg-blue-700 text-white font-bold md:py-2 px-4 rounded"
onClick={() => addToFavorites(student)}
>
Add to Favorites
</button>
)}
</li>
))}
</ul>

</div>
</div>
);
};

export default StudentList;

