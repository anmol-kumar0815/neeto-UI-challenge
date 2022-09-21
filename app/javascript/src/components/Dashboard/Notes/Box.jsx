import React from "react";

import Note from "./Note";

const Box = ({ fetchNotes, notes }) => (
  <div className="flex w-full flex-col">
    {notes.map(note => (
      <Note fetchNotes={fetchNotes} key={note.id} note={note} />
    ))}
  </div>
);
export default Box;
