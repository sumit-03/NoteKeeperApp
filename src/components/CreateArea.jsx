import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChangeInTitle(event) {
    const newVal = event.target.value;
    setTitle(newVal);

  }

  function handleChangeInContent(event) {
    const newVal = event.target.value;
    setContent(newVal);
  }

  function handleAddItemClick(event) {
    props.onAdd({
      title: title,
      content: content
    });
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  function  exapndTextArea() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note" >

        {isExpanded && <input name="title" placeholder="Title" onChange={handleChangeInTitle} value={title} /> }
        
        <textarea name="content" placeholder="Take a note..." rows= {isExpanded ? "3" : "1"} onChange={handleChangeInContent} value={content} onFocus={exapndTextArea} />
        {isExpanded &&
          <Zoom in={true} >
            <Fab onClick={handleAddItemClick} >
              <AddIcon />
            </Fab>
          </Zoom> 
        }
      </form>
    </div>
  );
}

export default CreateArea;
