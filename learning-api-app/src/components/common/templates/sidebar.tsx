import * as React from "react";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box } from "@learning/components/common/box";
import { Link, LinkPropsInterface } from "@learning/components/common/Link";
import { useTranslation } from "react-i18next";
import { Search } from "@learning/components/common/search";

export const Section: React.FC<{}> = ({ children, ...props }): JSX.Element => {
  const { theme }: any = useTheme();

  return (
    <Box
      style={{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
      }}
      component={"section"}
      {...props}
    >
      {children}
    </Box>
  );
};

interface ArticlePropsInterface extends LinkPropsInterface {
  isActive?: boolean;
}
export const Article: React.FC<ArticlePropsInterface> = ({
  children,
  isActive,
  ...props
}): JSX.Element => {
  const { theme }: any = useTheme();

  return (
    <Box
      style={{
        width: "100%"
      }}
    >
      <Link
        variant={"h6"}
        style={{
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1)
        }}
        {...props}
      >
        {children}
      </Link>
    </Box>
  );
};

export const SubArticle: React.FC<LinkPropsInterface> = ({
  children,
  ...props
}): JSX.Element => {
  const { theme }: any = useTheme();

  return (
    <Box
      style={{
        width: "100%",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }}
    >
      <Link
        variant={"body1"}
        style={{
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        }}
        {...props}
      >
        {children}
      </Link>
    </Box>
  );
};

const ARTICLES: any = {
  fundamentals: false,
  creatingAnApi: false,
  performCrud: false,
  additionalResources: false,
  serverSide: false
};

interface SidebarPropsInterface {}

export const Sidebar: React.FC<SidebarPropsInterface> = ({
  children
}) => {
  const { theme } = useTheme();
  const { t  } = useTranslation();

  const [showSubArticles, setShowSubArticles] = React.useState<any>({
    ...ARTICLES,
    fundamentals: true
  });

  const SearchContent = (
    <Box
      style={{
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
      }}
    >
      <Search
        name={"search"}
        autoComplete={"off"}
        placeholder={t("SEARCH")}
        onChange={(event: any) => {
          console.log(event);
        }}
      />
    </Box>
  );

  const FundamentalsContent = (
    <Section>
      <Article
        onClick={() =>
          setShowSubArticles({
            ...ARTICLES,
            fundamentals: !showSubArticles.fundamentals
          })
        }
        isActive={showSubArticles.fundamentals}
        href={"#fundamentals"}
      >
        {t("FUNDAMENTALS")}
      </Article>
      {showSubArticles.fundamentals ? (
        <>
          <SubArticle href={"#getting-started"}>
            {t("GETTING_STARTED")}
          </SubArticle>
          <SubArticle href={"#prerequisites"}>{t("PRE_REQUISITES")}</SubArticle>
          <SubArticle href={"#installation"}>{t("INSTALLATION")}</SubArticle>
          <SubArticle href={"#register-with-vtecx"}>
            {t("REGISTER_WITH_VTECX")}
          </SubArticle>
          <SubArticle href={"#login-with-vtecx"}>
            {t("LOGIN_WITH_VTECX")}
          </SubArticle>
          <SubArticle href={"#create-service"}>
            {t("CREATE_SERVICE")}
          </SubArticle>
          <SubArticle href={"#fundamentals-summary"}>
            {t("FUNDAMENTALS_SUMMARY")}
          </SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const CreatingAnApiContent = (
    <Section>
      <Article
        onClick={() =>
          setShowSubArticles({
            ...ARTICLES,
            creatingAnApi: !showSubArticles.creatingAnApi
          })
        }
        isActive={showSubArticles.creatingAnApi}
        href={"#creating-an-api"}
      >
        {t("CREATING_AN_API")}
      </Article>
      {showSubArticles.creatingAnApi ? (
        <>
          <SubArticle href={"#create-schema"}>{t("CREATE_SCHEMA")}</SubArticle>
          <SubArticle href={"#create-an-api-summary"}>
            {t("SUMMARY")}
          </SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const PerformCrudContent = (
    <Section>
      <Article
        onClick={() =>
          setShowSubArticles({
            ...ARTICLES,
            performCrud: !showSubArticles.performCrud
          })
        }
        isActive={showSubArticles.performCrud}
        href={"#perform-crud"}
      >
        {t("PERFORM_CRUD")}
      </Article>
      {showSubArticles.performCrud ? (
        <>
          <SubArticle href={"#crud-create"}>{t("CREATE")}</SubArticle>
          <SubArticle href={"#crud-update"}>{t("UPDATE")}</SubArticle>
          <SubArticle href={"#crud-delete"}>{t("DELETE")}</SubArticle>
          <SubArticle href={"#crud-read"}>{t("READ")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const ServerSideContent = (
    <Section>
      <Article
        onClick={() =>
          setShowSubArticles({
            ...ARTICLES,
            serverSide: !showSubArticles.serverSide
          })
        }
        isActive={showSubArticles.serverSide}
        href={"#server-side-javascript"}
      >
        {t("SERVER_SIDE_JAVASCRIPT")}
      </Article>
      {showSubArticles.serverSide ? (
        <>
          <SubArticle href={"#server-side-basics"}>{t("BASICS")}</SubArticle>
          <SubArticle href={"#simple-upload-photo"}>{t("UPLOAD_PHOTO")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const AdditionalResourcesContent = (
    <Section>
      <Article
        onClick={() =>
          setShowSubArticles({
            ...ARTICLES,
            additionalResources: !showSubArticles.performCrud
          })
        }
        isActive={showSubArticles.additionalResources}
        href={"#additional-resources"}
      >
        {t("ADDITIONAL_RESOURCES")}
      </Article>
      {showSubArticles.additionalResources ? (
        <>
          <SubArticle href={"#medium-links"}>{t("MEDIUM_LINK")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  return (
    <>
      {SearchContent}
      {FundamentalsContent}
      {CreatingAnApiContent}
      {PerformCrudContent}
      {ServerSideContent}
      {AdditionalResourcesContent}
      {children}
    </>
  );
};
