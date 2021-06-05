import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

function EditIconComponent() {
    return <div className="edit-icon">
        <Zoom in={true} >
            <Fab title="SET NEW CODE" >
              <EditIcon />
            </Fab>
        </Zoom>
    </div> 
      
}

export default EditIconComponent;