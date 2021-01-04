import { Box } from "@learning/components/common/box";
import { IconButton } from "@learning/components/common/icon-button";
import { Text } from "@learning/components/common/text";
import { useTheme } from "@learning/components/hooks/useTheme";
import { CopyToClipboard } from '@learning/utilities/copy-to-clipboard';
import get from "lodash/get";
import * as Prism from "prismjs";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface CodePropsInterface {
  caption?: JSX.Element | JSX.Element[] | string;
  type?: "bash" | "javascript" | "css" | "html";
  prism?: boolean;
  className?: string
  printContent?: string
}

export const Code: React.FC<CodePropsInterface> = ({
  children,
  type = "bash",
  prism = true,
  caption,
  printContent,
}): JSX.Element => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [clicked, setClicked] = React.useState<boolean>(false);
  let timeout: any= React.useRef().current

  React.useEffect(() => {
    if (prism) {
      Prism.highlightAll();
    }
  }, []);

  React.useEffect(() => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => setClicked(false), 5000);
  }, [clicked])

  const onCopy = () => {
    setClicked(true);
    if (type == 'javascript' || type == 'html') {
      // @ts-ignore
      CopyToClipboard({
        stringifyData: JSON.stringify(printContent ? printContent : children),
        removeTags: true
      });
    }
  }

  return (
    <Box
      style={{
        margin: 0,
        height: "100%",
        position: "relative",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1)
      }}
    >
      <Box
        style={{
          backgroundColor: theme.palette.background.default
        }}
        component={"pre"}
      >
        {React.Children.map(children, item => {
          const className = get(item, "props.className", "");
          const innerChildren = get(item, "props.children", "");

          return (
            <Box
              style={{
                backgroundColor: theme.palette.background.default
              }}
              component={"code"}
              className={`language-${type} ${className}`}
            >
              {React.Children.count(innerChildren) > 1
                ? React.Children.map(innerChildren, innerItem => {
                    return (
                      <Box
                        style={{
                          backgroundColor: theme.palette.background.default
                        }}
                        component={"code"}
                        className={`language-${type} ${className}`}
                      >
                        {innerItem}
                      </Box>
                    );
                  })
                : item}
            </Box>
          );
        })}
      </Box>
      {caption ? (
        <Box
          style={{
            backgroundColor: theme.palette.background.default
          }}
          component={"figcaption"}
          padding={1}
        >
          <Text variant={"body2"}>{caption}</Text>
        </Box>
      ) : (
        <></>
      )}
      {type == "javascript" ? (
        <IconButton
          onClick={onCopy}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: theme.spacing(1),
            opacity: 0.5,
            transition: "all linear 0.25s",
            cursor: "pointer",
            borderRadius: theme.shape.borderRadius,
            // @ts-ignore
            ":hover": {
              opacity: 1,
              transition: "all linear 0.25s"
            }
          }}
        >
          <Text variant={"body2"}>{clicked ? t("COPIED") : t("COPY")}</Text>
        </IconButton>
      ) : (
        <></>
      )}
    </Box>
  );
};
