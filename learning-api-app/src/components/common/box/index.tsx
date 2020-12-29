import * as React from "react";
import MaterialBox, { BoxProps } from "@material-ui/core/Box";

interface BoxPropsInterface extends BoxProps {}

export const Box: React.FC<BoxPropsInterface> = ({ ...props }): JSX.Element => {
  return <MaterialBox {...props} />;
};
