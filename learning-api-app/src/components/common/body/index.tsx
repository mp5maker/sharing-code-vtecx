import * as React from "react";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box, BoxPropsInterface } from "@learning/components/common/box";
import { Sidebar } from "@learning/components/common/templates/sidebar";

interface BodyPropsInterface extends BoxPropsInterface {
  documentation?: boolean;
  aside?: JSX.Element | JSX.Element[];
}

export const Body: React.FC<BodyPropsInterface> = ({
  aside,
  children,
  documentation = true,
  ...props
}): JSX.Element => {
  const { theme }: any = useTheme();

  if (documentation) {
    return <Sidebar {...props}>{children}</Sidebar>;
  }

  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.paper,
        position: "relative"
      }}
    >
      {children}
    </Box>
  );
};
