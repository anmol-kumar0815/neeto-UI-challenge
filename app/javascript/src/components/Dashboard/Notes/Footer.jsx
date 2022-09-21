import React from "react";

import { Clock } from "neetoicons";
import { Tooltip, Button, Typography, Avatar } from "neetoui";

import { calculateCreatedAgo, formatDateToWeekDay } from "./utils";

const Footer = ({ note }) => (
  <div className="flex items-center justify-between">
    <Button className="mx-2 mt-3" label="Getting Started" style="secondary" />
    <span className="flex justify-between">
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
    </span>
  </div>
);
export default Footer;
