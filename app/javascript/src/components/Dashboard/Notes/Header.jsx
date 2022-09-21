import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Header = ({ title }) => (
  <div className="flex justify-between text-xl font-bold">
    <Typography style="h3">{title}</Typography>
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li>Edit</li>
      <li>Delete</li>
    </Dropdown>
  </div>
);
export default Header;
