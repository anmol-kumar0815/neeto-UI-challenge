import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

import DeleteAlert from "./DeleteAlert";

const Header = ({ fetchNotes, note }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const handleDelete = () => {
    setShowDeleteAlert(true);
    setSelectedNote(note);
  };

  return (
    <>
      <div className="flex justify-between text-xl font-bold">
        <Typography style="h3">{note.title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <li>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </Dropdown>
      </div>
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNote={selectedNote}
          setSelectedDeleteNote={setSelectedNote}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};
export default Header;
