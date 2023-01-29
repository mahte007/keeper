import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([{
        title: "This is a Title",
        content: "This is the content area - You can delete me if you want!"
    }])

    function addItem(inputText){
        setNotes(prevNotes => {
            return [...prevNotes, inputText]
        })
    }

    function deleteItem(id){
        setNotes(prevNotes => {
            return prevNotes.filter(
                (note, index) => {
                    return index !== id;
                }
            )
        })
    }

    return (
        <div>
            <Header/> 
            <CreateArea onAdd={addItem}/>
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} content={noteItem.content} title={noteItem.title} onClick={deleteItem}/>
            })}
            <Footer/>
        </div>
    )
}

export default App;