import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const buildContactTableColumnData = () => [
  {
    title: "Name & Role",
    dataIndex: "firstName",
    key: "firstName",
    width: "30%",
    render: (firstName, { lastName, role }) => (
      <div className="flex space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
        <div>
          <Typography style="h4">{`${firstName} ${lastName}`}</Typography>
          <Typography style="body3">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "20%",
  },
  {
    title: "",
    dataIndex: "option",
    key: "option",
    width: "20%",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
  },
];
