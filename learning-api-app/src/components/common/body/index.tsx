import * as React from "react";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box, BoxPropsInterface } from "@learning/components/common/box";
import { useTranslation } from "react-i18next";
import { Text } from "@learning/components/common/text";
import { NavBar } from "@learning/components/common/nav-bar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from "@learning/components/common/icon-button";
import {
  LANGUAGE_ENGLISH,
  LANGUAGE_JAPANESE
} from "@learning/constants/settings";
import { Sidebar } from "@learning/components/common/templates/sidebar";
import { FloatingBar } from '@learning/components/common/floating-bar'

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
  const { t, i18n } = useTranslation();

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
              minHeight: 60,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text color={"inherit"} variant={"h5"}>
              {t("VTECX")}
            </Text>
            <Box
              helper={"spaceBetween"}
              style={{
                backgroundColor: "transparent"
              }}
            >
              <IconButton
                onClick={() => {
                  i18n.changeLanguage(LANGUAGE_ENGLISH);
                }}
              >
                <Text
                  style={{
                    color:
                      i18n.language == LANGUAGE_ENGLISH
                        ? theme.palette.info.main
                        : theme.palette.text.main
                  }}
                >
                  EN
                </Text>
              </IconButton>
              <IconButton
                onClick={() => {
                  i18n.changeLanguage(LANGUAGE_JAPANESE);
                }}
              >
                <Text
                  style={{
                    color:
                      i18n.language == LANGUAGE_JAPANESE
                        ? theme.palette.info.main
                        : theme.palette.text.main
                  }}
                >
                  JA
                </Text>
              </IconButton>
            </Box>
          </Toolbar>
        </NavBar>
        <Box helper={"container"}>
          <Box
            className={"sidebar-container"}
            component={"aside"}
            helper="sidebar"
          >
            <Sidebar>{aside}</Sidebar>
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
        <FloatingBar />
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
