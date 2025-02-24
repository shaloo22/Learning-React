import React, { useEffect, useState } from 'react'

const ToDoList = () => {
    
    const [task, setTask] = useState("")

    const getSavedTasks = () => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : []
    };
    const [tasks, setTasks] = useState(getSavedTasks)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);


    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task, compelete: false }])
            setTask("")
        }
    }
    const toggleTask = (id) => {
        setTasks(tasks.map((t) =>
            t.id === id ? { ...t, compelete: !t.compelete } : t
        ));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h2>To-DoList</h2>
            <input type=' text'
                placeholder='Enter Task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            <ul style={{ listStyle: "none", padding: 0, }}>
                {tasks.map((t) => (
                    <li key={t.id} style={{
                        textDecoration: t.compelete ? "line-through" : "none", margin: "10px 0"
                    }}>
                        {t.text}
                        <button onClick={() => toggleTask(t.id)} style={{ marginLeft: "10px" }}>
                            {t.compelete ? "Undo" : "Mark as Done"}
                        </button>
                        <button onClick={() => deleteTask(t.id)} style={{ marginLeft: '10px' }}>Delete</button>

                    </li>
                ))}
            </ul>

            <ul>

            </ul>

        </div>
    )
}

export default ToDoList
