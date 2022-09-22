import React, { useState } from "react";

import { Button, Table, Pagination } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACT_DETAILS_DATA } from "./constant";
import Menu from "./Menu";
import { buildContactTableColumnData } from "./util";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
          columnData={buildContactTableColumnData()}
          rowData={CONTACT_DETAILS_DATA}
          onRowClick={() => {}}
          onRowSelect={() => {}}
        />
        <Pagination count={50} navigate={() => {}} pageNo={3} pageSize={10} />
      </Container>
    </>
  );
};

export default Contacts;
