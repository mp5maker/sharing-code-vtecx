import * as React from "react";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box } from "@learning/components/common/box";
import { Link, LinkPropsInterface } from "@learning/components/common/Link";
import { useTranslation } from "react-i18next";
import { Text } from "@learning/components/common/text";
import { NavBar } from "@learning/components/common/nav-bar";
import Toolbar from "@material-ui/core/Toolbar";
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
  performCrud: false
};

interface SidebarPropsInterface {
  aside?: JSX.Element | JSX.Element[] | string;
}

export const Sidebar: React.FC<SidebarPropsInterface> = ({
  aside,
  children,
  ...props
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

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
          className={"sidebar-container"}
          component={"aside"}
          helper="sidebar"
        >
          {SearchContent}
          {FundamentalsContent}
          {CreatingAnApiContent}
          {PerformCrudContent}
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
};
