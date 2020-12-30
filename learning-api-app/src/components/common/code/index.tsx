import * as React from "react";
import { Box } from "@learning/components/common/box";
import { Text } from "@learning/components/common/text";
import * as Prism from "prismjs";
import { useTheme } from "@learning/components/hooks/useTheme";
import get from 'lodash/get'
import { THEME_LIGHT, THEME_DARK } from '@learning/constants/settings'

interface CodePropsInterface {
  caption?: JSX.Element | JSX.Element[] | string;
  type?: "bash" | "javascript" | "css";
  prism?: boolean,
  className?: string
}

export const Code: React.FC<CodePropsInterface> = ({
  children,
  type = "bash",
  prism = true,
  caption
}): JSX.Element => {
  const { theme,  currentThemeKey} = useTheme();

  React.useEffect(() => {
    // @ts-ignore
    if (currentThemeKey == THEME_LIGHT) import('./prism-light.css').then(() => {})
    // @ts-ignore
    if (currentThemeKey == THEME_DARK) import('./prism-dark.css').then(() => {})
    if (prism) Prism.highlightAll();
  }, []);

  console.debug(theme)

  return (
    <Box
      style={{
        margin: 0,
        height: '100%'
      }}
    >
      <Box component={"pre"}>
      {
        React.Children.map(children, (item) => {
          const className = get(item, 'props.className', '')
          const innerChildren = get(item, 'props.children', '')

          return (
            <Box
              component={"code"}
              className={`language-${type} ${className}`}>
              {
                React.Children.count(innerChildren) > 1 ? React.Children.map(innerChildren, (innerItem) => {
                  return (
                    <Box
                      component={"code"}
                      className={`language-${type} ${className}`}>
                      { innerItem }
                    </Box>
                  )
                }) : item
              }
            </Box>
          )
        })
      }
      </Box>
      {
        caption ? (
        <Box component={"figcaption"}>
          <Text>{caption}</Text>
        </Box>
        ): <></>
      }
    </Box>
  );
};
