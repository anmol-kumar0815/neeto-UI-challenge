import React from "react";

import Note from "./Note";

const Box = ({ notes }) => (
  <div className="flex w-full flex-col">
    {notes.map(note => (
      <Note key={note.id} note={note} />
    ))}
  </div>
);
export default Box;
