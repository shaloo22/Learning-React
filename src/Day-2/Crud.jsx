import React, { useState } from 'react';
import './Crud.css';

const Crud = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Annie', email: 'annie@gmail.com' },
        { id: 2, name: 'John Sane', email: 'john@gmail.com' },
        { id: 3, name: 'Shalu', email: 'shalu@gmail.com' },
        { id: 4, name: 'Rashmi', email: 'rashmi@gmail.com' }
    ]);

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    const addUser = () => {
        if (!newName || !newEmail) return;

        const newUser = {
            id: Date.now(),
            name: newName,
            email: newEmail
        };
        setUsers([...users, newUser]);
        setNewName('');
        setNewEmail('');
    };

    const handleDelete = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    };

    const handleEdit = (user) => {
        setEditingUser({ ...user });
    };

    const saveChanges = () => {
        setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
        setEditingUser(null);
    };

    return (
        <div className="crud-container">
            <h2>CRUD OPERATION - User List</h2>

            <div className="add-user">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <button onClick={addUser} className="add-btn">Add User</button>
            </div>

            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <span>{user.name} - {user.email}</span>
                        <div className="button-group">
                            <button onClick={() => handleEdit(user)} className="edit-btn">Edit</button>
                            <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>


            {editingUser && (
                <div className="edit-section">
                    <h2>Edit User</h2>
                    <input
                        type="text"
                        value={editingUser.name}
                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                    <input
                        type="email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <button onClick={saveChanges} className="save-btn">Save</button>
                    <button onClick={() => setEditingUser(null)} className="cancel-btn">Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Crud;
