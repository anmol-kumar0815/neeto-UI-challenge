import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Tooltip, Typography, Dropdown, Avatar, Button } from "neetoui";

import Container from "./Container";
import DeleteAlert from "./DeleteAlert";
import { calculateCreatedAgo, formatDateToWeekDay } from "./utils";

const Note = ({ fetchNotes, note }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const { Menu, MenuItem } = Dropdown;

  const handleDelete = () => {
    setShowDeleteAlert(true);
    setSelectedNote(note);
    setSelectedNoteIds([note.id]);
  };

  return (
    <Container key={note.id}>
      <div className="flex justify-between text-xl font-bold">
        <Typography style="h3">{note.title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <Menu>
            <MenuItem.Button>Edit</MenuItem.Button>
            <MenuItem.Button onClick={handleDelete}>Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNote={selectedNote}
          selectedNoteIds={selectedNoteIds}
          setSelectedDeleteNote={setSelectedNote}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
      <Typography style="body3">{note.description}</Typography>
      <div className="flex items-center justify-between">
        <Button
          className="mx-2 mt-3"
          label="Getting Started"
          style="secondary"
        />
        <div className="flex justify-between">
          <Clock className="mx-1 mt-3" />
          <Tooltip
            content={formatDateToWeekDay(note.created_at)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography className="mx-1 mt-4" style="body3">
              Created {calculateCreatedAgo(note.created_at)}
            </Typography>
          </Tooltip>
          <Avatar
            className="mx-1 mt-3"
            size="small"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
            }}
          />
        </div>
      </div>
    </Container>
  );
};
export default Note;
