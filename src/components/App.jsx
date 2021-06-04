import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const [notes, setNotes] = useState(localStorage.notes);

  // console.log(location.state.loggedIn);
  function getArray(notesString) {
    const notesArray = notesString ? JSON.parse(notesString) : [];
    return notesArray;
  }

  function addNote(note) {
    // console.log(note);
    
    setNotes((prevNotes) => {
      const prevNotesArray = localStorage.notes ? getArray(prevNotes) : [];
      const newNotes = [...prevNotesArray, note];
      localStorage.notes = JSON.stringify(newNotes);
      return localStorage.notes;
    }); 

    
     
  }

  function removeNote(noteID) {
     setNotes((prevNotes) => {
        const prevNotesArray = localStorage.notes ? getArray(prevNotes) : [];
        const newNotes = prevNotesArray.filter((value, id) => {
          return (id+1) !== noteID;
        })
        localStorage.notes = JSON.stringify(newNotes);
        return localStorage.notes;
     })
  }

  // console.log(notes);

  return (
    <div>
      <Header isLoggedIn={true} />

      <CreateArea onAdd={addNote} /> 
    
      <div className="noteDiv" >
        <Note key={0} id={0} title="Note title" content="Note content" onDelete={removeNote} />

        {
          getArray(notes).map((note, noteID) => {
            return <Note key={noteID + 1} id={noteID + 1} title={note.title} content={note.content} onDelete={removeNote} />
          })

        }
      </div> 
      
      <Footer />
    </div>
  );
}

export default App;
