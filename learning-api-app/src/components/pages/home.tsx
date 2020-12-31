import * as React from "react";
import { Body } from "@learning/components/common/body";
import { Text } from "@learning/components/common/text";
import { useTranslation } from "react-i18next";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box } from "@learning/components/common/box";
import { Code } from "@learning/components/common/code";
import ReactMarkdown from "react-markdown";
import * as Markdowns from "@learning/markdowns";
import { Picture } from "@learning/components/common/Picture";
import { FolderAcls } from "@learning/components/snippets/folder-acls";
import { Link } from "@learning/components/common/Link";

export const Home = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  // @ts-ignore
  const currentMarkdown: any = Markdowns.default[i18n.language];

  const GettingStartedContent = (
    <>
      <Box id={"getting-started"}>
        <Text variant={"h4"}>{t("GETTING_STARTED")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.GettingStarted}
          />
        </Text>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"prerequisites"}>
        <Text variant={"h4"}>{t("PRE_REQUISITES")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.PreRequisites}
          />
        </Text>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"installation"}>
        <Text variant={"h4"}>{t("INSTALLATION")}</Text>
        <Code type={"bash"}>
          <Text className={"token function"}>npm install</Text> create-vtecx-app
          <Box component={"br"} />
          <Text className={"token function"}>npx create-vtecx-app </Text>
          [your-project-folder]
          <Box component={"br"} />
          <Text className={"token function"}>cd </Text>[your-project-folder]
          <Box component={"br"} />
          <Text className={"token function"}>npm </Text>install
        </Code>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"register-with-vtecx"}>
        <Text variant={"h4"}>{t("REGISTER_WITH_VTECX")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.RegisterWithVtecx}
          />
        </Text>
        <Picture src={"img/click-sign-up.png"} />
      </Box>
      <Box marginTop={theme.spacing(1)} id={"login-with-vtecx"}>
        <Text variant={"h4"}>{t("LOGIN_WITH_VTECX")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.LoginWithVtecx}
          />
        </Text>
        <Picture src={"img/click-login.png"} />
      </Box>
      <Box marginTop={theme.spacing(1)} id={"create-service"}>
        <Text variant={"h4"}>{t("CREATE_SERVICE")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.CreateService}
          />
        </Text>
        <Picture src={"img/create-service.png"} />
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.LoginThroughTerminal}
          />
        </Text>
        <Picture src={"img/click-management-screen.png"} />
        <Code type={"bash"}>
          <Text className={"token function"}>npm run</Text> login <br />
          <br />
          <Text className={"token function"}>service:</Text> <br />
          <Text className={"token function"}>is production?:</Text> n <br />
          <Text className={"token function"}>login:</Text> <br />
          <Text className={"token function"}>password:</Text> <br />
        </Code>
        <Code type={"bash"}>
          <Text className={"token function"}>npm run</Text> serve:login
        </Code>
        <Picture src={"img/serve-index-login.png"} />
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.AfterServeIndexLogin}
          />
        </Text>
        <Code type={"bash"}>
          <Text className={"token function"}>npm run</Text> serve:index
        </Code>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"fundamentals-summary"}>
        <Text variant={"h4"}>{t("FUNDAMENTALS_SUMMARY")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.FundamentalsSummary}
          />
        </Text>
      </Box>
    </>
  );

  const CreatingAnApiContent = (
    <>
      <Box id={"creating-an-api"} marginTop={theme.spacing(2)}>
        <Text variant={"h4"}>{t("CREATING_AN_API")}</Text>
        <Box id={"create-schema"}>
          <Text>
            <ReactMarkdown
              plugins={[]}
              allowDangerousHtml
              children={currentMarkdown.CreateSchema}
            />
          </Text>
          <Picture src={"img/create-endpoint.png"} />
          <Code type={"bash"}>
            <Text className={"token function"}>npm run</Text>{" "}
            download:folderacls
            <br />
          </Code>
          <Code caption={"setup/_settings/folderacls.json"} type="javascript">
            {FolderAcls}
          </Code>
          <Text
            style={{
              marginTop: theme.spacing(2)
            }}
          >
            {t("ENTRY_SCHEMA_MANAGEMENT")}
          </Text>
          <Box marginTop={1}>
            <Picture
              src={"img/top-schema.png"}
              caption={t("TOP_SCHEMA") as string}
            />
          </Box>
          <Box marginTop={1}>
            <Picture
              src={"img/sub-schema.png"}
              caption={t("SUB_SCHEMA") as string}
            />
          </Box>
          <Code type={"bash"} caption={"setup/settings/_template.xml"}>
            <Text className={"token function"}>npm run</Text> download:template
          </Code>
          <Code type={"bash"} caption={"src/typings/index.d.ts"}>
            <Text className={"token function"}>npm run</Text> download:typings
          </Code>
          <Text>
            <ReactMarkdown
              plugins={[]}
              allowDangerousHtml
              children={currentMarkdown.UploadSampleData}
            />
          </Text>
          <Link variant={'body1'} href="downloads/sample.json" download>
            sample.json
          </Link>
        </Box>
      </Box>
    </>
  );

  return (
    <Body documentation={true} aside={<></>}>
      {GettingStartedContent}
      {CreatingAnApiContent}
    </Body>
  );
};
