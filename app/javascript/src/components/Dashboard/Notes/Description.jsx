import React from "react";

import { Typography } from "neetoui";

const Description = ({ description }) => (
  <div className="mb-4 flex text-left">
    <Typography style="body3">{description}</Typography>
  </div>
);
export default Description;
