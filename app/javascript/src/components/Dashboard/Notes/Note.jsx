import React from "react";

import Container from "./Container";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";

const Note = ({ note }) => (
  <Container key={note.id}>
    <Header title={note.title} />
    <Description description={note.description} />
    <Footer note={note} />
  </Container>
);
export default Note;
