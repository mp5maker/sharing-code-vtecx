import * as React from "react";
import { Text } from "@learning/components/common/text";
import { NavBar } from "@learning/components/common/nav-bar";
import { useTheme } from "@learning/components/hooks/useTheme";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, BoxPropsInterface } from "@learning/components/common/box";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  if (documentation) {
    return (
      <Box {...props}>
        <NavBar
          style={{
            minHeight: 60,
            padding: theme.spacing.small
          }}
          position={"sticky"}
        >
          <Toolbar
            variant={"dense"}
            style={{
              minHeight: 60
            }}
          >
            <Text color={"inherit"} variant={"h5"}>
              {t("VTECX")}
            </Text>
          </Toolbar>
        </NavBar>
        <Box helper={"container"}>
          <Box
            style={{
              padding: theme.spacing(3)
            }}
            className={"sidebar-container"}
            component={"aside"}
            helper="sidebar"
          >
            {aside}
          </Box>
          <Box
            style={{
              padding: theme.spacing(3)
            }}
            className={"main-container"}
            component={"main"}
            helper={"main"}
          >
            {children}
          </Box>
        </Box>
      </Box>
    );
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
