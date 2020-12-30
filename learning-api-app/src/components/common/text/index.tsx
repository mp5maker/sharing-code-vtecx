import * as React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useTheme } from "@learning/components/hooks/useTheme";

interface TextPropsInterface extends TypographyProps {}

export const Text: React.FC<TextPropsInterface> = ({
  children,
  style,
  color,
  ...otherProps
}): JSX.Element => {
  const { theme }: any = useTheme();

  const props = {
    style: {
      ...(color ? {} : { color: theme.palette.text.primary }),
      ...(style ? style : {})
    },
    ...otherProps
  };

  return <Typography {...props}>{children}</Typography>;
};
