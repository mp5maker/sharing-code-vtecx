import * as React from "react";
import { IconButton } from "@learning/components/common/icon-button";
import { useTheme } from "@learning/components/hooks/useTheme";
import { THEME_LIGHT, THEME_DARK } from "@learning/constants/settings";
import { Box } from "@learning/components/common/box";

interface FloatingBarPropsInterface {}

export const FloatingBar: React.FC<FloatingBarPropsInterface> = (): JSX.Element => {
  const { setTheme, theme, currentThemeKey }: any = useTheme();

  return (
    <Box
      style={{
        position: "fixed",
        bottom: 25,
        right: 25,
        minWidth: 100,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3]
      }}
    >
      <Box helper={"spaceBetween"}>
        <IconButton
          style={{
            display: "block",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: theme.palette.common.white,
            border: `2px solid ${
              currentThemeKey == THEME_LIGHT
                ? theme.palette.primary.main
                : theme.palette.text.main
            }`
          }}
          onClick={() => setTheme(THEME_LIGHT)}
        ></IconButton>
        <IconButton
          style={{
            display: "block",
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginLeft: theme.spacing(1),
            backgroundColor: theme.palette.common.black,
            border: `2px solid ${
              currentThemeKey == THEME_DARK
                ? theme.palette.primary.main
                : theme.palette.text.main
            }`
          }}
          onClick={() => setTheme(THEME_DARK)}
        ></IconButton>
      </Box>
    </Box>
  );
};
