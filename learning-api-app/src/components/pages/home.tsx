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
import { SimplePost } from "@learning/components/snippets/simple-post";
import { SimpleUpdate } from "@learning/components/snippets/simple-update";
import { SimpleDelete } from "@learning/components/snippets/simple-delete";
import { SSRHtml } from "@learning/components/snippets/ssr-html";
import { PropertiesXML } from "@learning/components/snippets/properties";
import {
  SimpleBigQueryGet,
  SimpleBigQueryPost,
  SimpleBigQueryPut,
  SimpleBigQueryDelete,
} from "@learning/components/snippets/big-query";
import {
  SimpleUploadServerPhoto,
  SimpleUploadClientPhoto
} from "@learning/components/snippets/simple-upload-photo";
import { Link } from "@learning/components/common/Link";
import { useLocation } from "react-router-dom";
import get from "lodash/get";

export const Home = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const location = useLocation();
  // @ts-ignore
  const currentMarkdown: any = Markdowns.default[i18n.language];

  React.useEffect(() => {
    const hash = get(location, "hash", "");
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView();
    }
  }, []);

  const GettingStartedContent = (
    <>
      <Box id={"fundamentals"}>
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
            <Text className={"token function"}>npm install</Text>{" "}
            create-vtecx-app
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
        <Box marginTop={theme.spacing(1)} id={"simple-deploy"}>
          <Text variant={"h4"}>{t("DEPLOY")}</Text>
          <Text>
            <ReactMarkdown
              plugins={[]}
              allowDangerousHtml
              children={currentMarkdown.SimpleDeploy}
            />
          </Text>
          <Code type={"bash"}>
            <Text className={"token function"}>./deploy.sh</Text>
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
          <Link variant={"body1"} href="downloads/sample.json" download>
            sample.json
          </Link>
        </Box>
        <Box marginTop={theme.spacing(1)} id={"create-an-api-summary"}>
          <Text variant={"h4"}>{t("SUMMARY")}</Text>
          <Text>
            <ReactMarkdown
              plugins={[]}
              allowDangerousHtml
              children={currentMarkdown.CreateAnApiSummary}
            />
          </Text>
        </Box>
      </Box>
    </>
  );

  const PerformCrudContent = (
    <Box id={"perform-crud"} marginTop={theme.spacing(2)}>
      <Text variant={"h4"}>{t("PERFORM_CRUD")}</Text>
      <Text>
        <ReactMarkdown
          plugins={[]}
          allowDangerousHtml
          children={currentMarkdown.PerformCrud}
        />
      </Text>
      <Code type={"bash"}>
        <Text className={"token function"}>
          http://localhost:8000/d/users?x&f
        </Text>
      </Code>
      <Box marginTop={theme.spacing(1)} id={"crud-create"}>
        <Text variant={"h4"}>{t("CREATE")}</Text>
        <Code type="javascript">{SimplePost}</Code>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"crud-update"}>
        <Text variant={"h4"}>{t("UPDATE")}</Text>
        <Code type="javascript">{SimpleUpdate}</Code>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"crud-delete"}>
        <Text variant={"h4"}>{t("DELETE")}</Text>
        <Code type="javascript">{SimpleDelete}</Code>
      </Box>
      <Box marginTop={theme.spacing(1)} id={"crud-read"}>
        <Text variant={"h4"}>{t("READ")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.SimpleRead}
          />
        </Text>
        <Text variant={"body2"}>{t("GET_ALL_THE_DATA")}</Text>
        <Code type={"javascript"}>axios.get('/d/users?f')</Code>
        <Text variant={"body2"}>{t("GET_SPECIFIC_DATA")}</Text>
        <Code type={"javascript"}>{"axios.get(`/d/users?f&id=${id}`)"}</Code>
        <Text variant={"body2"}>{t("GET_DATA_BY_SCROLLING")}</Text>
        <Code type={"javascript"}>
          {"axios.get(`/d/users?f&l=${PAGE_SIZE}&p=${next}`)"}
        </Code>
        <Text variant={"body2"}>{t("GET_DATA_BY_PAGINATION")}</Text>
        <Code type={"javascript"}>
          {"axios.get(`/d/users?f&_pagination=1,50&l=${PAGE_SIZE}`)"}
        </Code>
        <Code type={"javascript"}>
          {"axios.get(`/d/users?f&n=${page}&l=${PAGE_SIZE}`)"}
        </Code>
        <Text variant={"body2"}>{t("SIMPLE_FILTERING_WITH_PAGINATION")}</Text>
        <Code type={"javascript"}>
          {
            "axios.get(`/d/users?f&_pagination=1,50&l=${PAGE_SIZE}&user.[YOUR_ATTR]=${CONDITION}`)"
          }
        </Code>
        <Text variant={"body2"}>{t("SIMPLE_SORTING_WITH_PAGINATION")}</Text>
        <Code type={"javascript"}>
          {"axios.get(`/d/users?f&n=${page}&l=${PAGE_SIZE}&s=${SORT}`)"}
        </Code>
      </Box>
    </Box>
  );

  const ServerSideContent = (
    <Box id={"server-side-javascript"} marginTop={theme.spacing(2)}>
      <Text variant={"h4"}>{t("SERVER_SIDE_JAVASCRIPT")}</Text>
      <Text>
        <ReactMarkdown
          plugins={[]}
          allowDangerousHtml
          children={currentMarkdown.ServerSideJavascriptIntro}
        />
      </Text>
      <Text>{t("WATCHING_THE_FUNCTIONS")}</Text>
      <Code type={"bash"}>
        <Text className={"token function"}>npm run</Text> watch:server --
        --env.entry=/server/[your-file-name]
      </Code>
      <Text>{t("DEPLOYING_THE_FUNCTION")}</Text>
      <Code type={"bash"}>
        <Text className={"token function"}>npm run</Text> serve --
        --env.entry=/server/[your-file-name]
      </Code>
      <Code type={"javascript"} caption={"src/server/ssr.html.tsx"}>
        {SSRHtml}
      </Code>
      <Box marginTop={theme.spacing(1)} id={"simple-upload-photo"}>
        <Text variant={"h4"}>{t("UPLOAD_PHOTO")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.UploadPhoto}
          />
        </Text>
        <Code type="javascript" caption={"src/server/save-profile-photo.tsx"}>
          {SimpleUploadServerPhoto}
        </Code>
        <Code type="javascript" caption={"Uploading the photo from anywhere"}>
          {SimpleUploadClientPhoto}
        </Code>
      </Box>
    </Box>
  );

  const BigQueryContent = (
    <Box id={"big-query"} marginTop={theme.spacing(2)}>
      <Text variant={"h4"}>{t("BIG_QUERY")}</Text>
      <Box id={"big-query-intro"}>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.BigQueryIntro}
          />
        </Text>
        <Code type={"bash"} caption={"setup/_settings/properties.xml"}>
          {PropertiesXML}
        </Code>
        <Code type={"javascript"} caption={"src/server/get-big-query.tsx"}>
          {SimpleBigQueryGet}
        </Code>
        <Code type={"javascript"} caption={"src/server/post-big-query.tsx"}>
          {SimpleBigQueryPost}
        </Code>
        <Code type={"javascript"} caption={"src/server/put-big-query.tsx"}>
          {SimpleBigQueryPut}
        </Code>
        <Code type={"javascript"} caption={"src/server/delete-big-query.tsx"}>
          {SimpleBigQueryDelete}
        </Code>
      </Box>
      <Box id={"big-query-summary"} marginTop={theme.spacing(2)}>
        <Text variant={"h4"}>{t("SUMMARY")}</Text>
        <Text>
          <ReactMarkdown
            plugins={[]}
            allowDangerousHtml
            children={currentMarkdown.BigQuerySummary}
          />
        </Text>
      </Box>
    </Box>
  );

  const AdditionalResourcesContent = (
    <Box id={"additional-resources"} marginTop={5}>
      <Text variant={"h4"}>{t("ADDITIONAL_RESOURCES")}</Text>
      <Box id={"medium-links"} marginTop={2}>
        <Text>PWA</Text>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://khan-photon.medium.com/create-a-simple-progressive-web-app-pwa-1685519acef7"
        >
          {t("CREATE_A_SIMPLE_PWA_APP")}
        </Link>
      </Box>
      <Box>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://khan-photon.medium.com/add-custom-install-banner-progressive-web-app-9c3b07f89481"
        >
          {t("ADD_CUSTOM_INSTALL_BANNER")}
        </Link>
      </Box>
      <Box>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://khan-photon.medium.com/pwa-using-vtecx-9fcb12ba2a24"
        >
          {t("PWA_APP_USING_VTECX")}
        </Link>
      </Box>
      <Box marginTop={2}>
        <Text>React Native</Text>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://khan-photon.medium.com/sharing-codes-between-react-web-app-and-react-native-expo-app-2887e437d55"
        >
          {t("SHARING_CODE_FROM_WEB_APP_TO_NATIVE_APP")}
        </Link>
      </Box>
      <Box marginTop={2}>
        <Text>Big Query</Text>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://logicalant.medium.com/bigquery-implementation-in-vtecx-app-acfabb754e20"
        >
          {t("BIG_QUERY")}
        </Link>
      </Box>
      <Box marginTop={2}>
        <Text>{t("MORE")}</Text>
        <Link
          target={"__blank"}
          variant={"body1"}
          href="https://khan-photon.medium.com/sharing-codes-between-react-web-app-and-react-native-expo-app-2887e437d55"
        >
          https://blog.vte.cx/
        </Link>
      </Box>
    </Box>
  );

  return (
    <Body documentation={true} aside={<></>}>
      {GettingStartedContent}
      {CreatingAnApiContent}
      {PerformCrudContent}
      {ServerSideContent}
      {BigQueryContent}
      {AdditionalResourcesContent}
    </Body>
  );
};
