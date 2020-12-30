import * as React from "react";
import { Body } from "@learning/components/common/body";
import { Text } from "@learning/components/common/text";
import { useTranslation } from "react-i18next";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box } from "@learning/components/common/box";
import { Code } from "@learning/components/common/code";
import ReactMarkdown from "react-markdown";
// @ts-ignore
import GettingStarted from "@learning/markdowns/en/getting-started.md";
// @ts-ignore
import Prerequisities from "@learning/markdowns/en/prerequisites.md";
// @ts-ignore
import Installation from "@learning/markdowns/en/installation.md";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <Body aside={<></>}>
      <Box id={"getting-started"}>
        <Text variant={"h4"}>{t("GETTING_STARTED")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={GettingStarted}
          />
        </Text>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"prerequisites"}>
        <Text variant={"h4"}>{t("PRE_REQUISITES")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={Prerequisities}
          />
        </Text>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"installation"}>
        <Text variant={"h4"}>{t("INSTALLATION")}</Text>
        <Code type={"bash"}>
          <Text className={"token function"}>npm install</Text> create-vtecx-app
          <Box component={"br"} />
          <Text className={"token function"}>npx create-vtecx-app </Text>{" "}
          [your-project-folder]
          <Box component={"br"} />
          <Text className={"token function"}>cd </Text> [your-project-folder]
          <Box component={"br"} />
          <Text className={"token function"}>npm </Text> install
        </Code>
      </Box>
    </Body>
  );
};
