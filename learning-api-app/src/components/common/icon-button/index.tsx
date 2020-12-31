import * as React from "react";
import MaterialIconButton, {
  IconButtonProps
} from "@material-ui/core/IconButton";

interface IconButtonPropsInterface extends IconButtonProps {}

export const IconButton: React.FC<IconButtonPropsInterface> = ({
  children,
  ...props
}): JSX.Element => {
  return <MaterialIconButton {...props}>{children}</MaterialIconButton>;
};
