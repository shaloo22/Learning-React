import React, { useState } from 'react'

const Cards = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [cards, setCards] = useState([])
    const [editCardId, setEditCardId] = useState(null);
    const [edittitle, setEditTitle] = useState("")
    const [editdescription, setEditDescription] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [darkMode, setDarkMode] = useState("")


    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value)

    const addCard = () => {
        if (title.trim() && description.trim()) {
            setCards([...cards, { id: Date.now(), title, description }]);
            setTitle("")
            setDescription("")
        }
    }
    const deleteCard = (id) => {
        setCards((cards) => cards.filter((card) => card.id !== id))
    }

    const startEdit = (card) => {
        setEditCardId(card.id);
        setEditTitle(card.title);
        setEditDescription(card.description);
    }

    const saveEdit = () => {
        setCards(
            cards.map((card) =>
                card.id === editCardId ? { ...card, title: edittitle, description: editdescription } : card
            )

        )
        setEditCardId(null)
        setEditTitle("")
        setEditDescription("")
    }

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <div style={{
            textAlign: 'center', marginTop: '50px', background: darkMode ? '#333' : "#fff",
            color: darkMode ? "#fff" : '#000',
            minHeight: '100vh',
            padding: '20px'
        }}>

            <h2>Create Cards</h2>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <input type=' text'
                value={searchTerm}
                placeholder='search cards...'
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px', padding: '3px' }} />


            <input
                type='text'
                value={title}
                onChange={handleTitleChange}
                placeholder='Enter Title' style={{ marginRight: '10px' }} />


            <input
                type='text'
                value={description}
                onChange={handleDescriptionChange}
                placeholder='Enter Description' style={{ marginRight: '10px' }} />
            <button onClick={addCard}>Add Card</button>


            <div style={{ display: 'flex', flexWrap: "wrap", gap: '10px', marginTop: '20px' }}>
                {filteredCards.length > 0 ? (
                    filteredCards.map((card, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', width: "200px", borderRadius: '10px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', }}>
                            {editCardId === card.id ? (
                                <>
                                    <input value={edittitle} onChange={(e) => setEditTitle(e.target.value)} />
                                    <input value={editdescription} onChange={(e) => setEditDescription(e.target.value)} />
                                    <button onClick={saveEdit}>Save</button>

                                </>
                            ) : (
                                <>

                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <button onClick={() => deleteCard(card.id)}>Delete</button>
                                    <button onClick={() => startEdit(card)}>Edit</button>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
};
export default Cards

