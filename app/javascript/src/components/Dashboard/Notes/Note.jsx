import React from "react";

import Container from "./Container";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";

const Note = ({ fetchNotes, note }) => (
  <Container key={note.id}>
    <Header fetchNotes={fetchNotes} note={note} />
    <Description description={note.description} />
    <Footer note={note} />
  </Container>
);
export default Note;
