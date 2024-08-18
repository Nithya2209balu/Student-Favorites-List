import React, { useState } from 'react';

const FavoritesList = () => {
const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('students')) || []);

const removeFromFavorites = (studentId) => {
const updatedFavorites = favorites.filter(student => student.id !== studentId);
setFavorites(updatedFavorites);
// Update localStorage
localStorage.setItem('students', JSON.stringify(updatedFavorites));
};

return (
    <div className="bg-blue-300 p-20">
<div className="p-10 bg-white">
<h1 className="text-2xl font-bold mb-4 p-3 bg-blue-300 rounded-md">Favorites List</h1>
<ul>
{favorites.map(student => (
<li key={student.id} className="flex items-center justify-between py-2 border-b">
<span>{student.name}</span>
<button
className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
onClick={() => removeFromFavorites(student.id)}
>
Remove
</button>
</li>
))}
</ul>
</div>
</div>
);
};

export default FavoritesList;

