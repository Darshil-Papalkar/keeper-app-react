import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [state, setState] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setState(false);
    event.preventDefault();
  }

  function inputSelected(){
    setState(true);
  }

  const textInput = (<input
                      name="title"
                      onChange={handleChange}
                      value={note.title}
                      placeholder="Title"
                    />);

  return (
    <div>
      <form className="create-note">

        {state ? textInput : null}

        <textarea
          // onClick={inputSelected}
          onSelect={inputSelected}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={state ? "3" : "1"}
        />

        <Zoom in={state ? true : false}>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
