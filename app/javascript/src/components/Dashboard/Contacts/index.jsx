import React, { useState } from "react";

import {
  Button,
  Table,
  Pagination,
  Alert,
  Toastr,
  Pane,
  Typography,
} from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACT_DETAILS_DATA } from "./constants";
import Form from "./Form";
import Menu from "./Menu";
import { buildContactTableColumnData } from "./utils";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPane, setShowPane] = useState(false);

  const handleDelete = () => {
    setShowAlert(false);
    Toastr.success("Contact deleted successfully.");
  };

  const onClose = () => setShowPane(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(prevState => !prevState)}
          title="Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowPane(preValue => !preValue)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          allowRowClick
          columnData={buildContactTableColumnData(setShowAlert)}
          rowData={CONTACT_DETAILS_DATA}
          onRowClick={() => {}}
          onRowSelect={() => {}}
        />
        <Pagination count={50} navigate={() => {}} pageNo={3} pageSize={10} />
        <Alert
          isOpen={showAlert}
          message="Are you sure you want to delete this contact? These changes cannot be undone."
          title="Delete Contact"
          onClose={() => setShowAlert(false)}
          onSubmit={() => handleDelete()}
        />
        <Pane isOpen={showPane} onClose={onClose}>
          <Pane.Header>
            <Typography style="h2" weight="semibold">
              Create a New Contact
            </Typography>
          </Pane.Header>
          <Form onClose={onClose} />
        </Pane>
      </Container>
    </>
  );
};

export default Contacts;
