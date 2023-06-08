import React from "react";

import Icons from "../assets/sprite.svg"

export const Icon = ({ name, color = "#909090", size="18px" }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);
