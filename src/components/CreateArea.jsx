import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/fab';
import Zoom from '@material-ui/core/Zoom';

function createArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(evt) {
        const {name, value} = evt.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }
    
    function submitNote(evt) {
        props.onAdd(note);
        setNote({
            title : "",
            content : ""
        });
        evt.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
                <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note" cols="30" rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote} > <AddIcon /> </Fab>
                </Zoom>
            </form>
        </div>
    );

}

export default createArea;