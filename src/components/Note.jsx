import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function handleDeleteNote() {
    props.onDelete(props.id);  
  }

  function textORurl() {
    const content = props.content;
    if(content.startsWith("https")) {
      return <a href={content} target="_blank" >{content}</a>;
    } else {
      return content;
    }
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{textORurl()}</p>
      { props.id === 0 ? <button>EXAMPLE NOTE </button> :<button onClick={handleDeleteNote} >
        <DeleteIcon />
      </button> }
    </div>
  );
}

export default Note;
