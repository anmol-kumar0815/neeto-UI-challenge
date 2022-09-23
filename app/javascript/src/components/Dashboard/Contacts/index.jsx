import React, { useState } from "react";

import { Button, Table, Pagination, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACT_DETAILS_DATA } from "./constant";
import Menu from "./Menu";
import { buildContactTableColumnData } from "./utils";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    setShowAlert(false);
    Toastr.success("Contact deleted successfully.");
  };

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          actionBlock={<Button icon="ri-add-line" label="Add New Contact" />}
          menuBarToggle={() => setShowMenu(prevState => !prevState)}
          title="Contacts"
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
          message="Are you sure you want to delete contact? These changes cannot be undone."
          title="Delete Contact"
          onClose={() => setShowAlert(false)}
          onSubmit={() => handleDelete()}
        />
      </Container>
    </>
  );
};

export default Contacts;
