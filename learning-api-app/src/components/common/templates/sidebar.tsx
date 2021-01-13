import { Box } from "@learning/components/common/box";
import { Link, LinkPropsInterface } from "@learning/components/common/link";
import { Search } from "@learning/components/common/search";
import { useTheme } from "@learning/components/hooks/useTheme";
import get from "lodash/get";
import * as React from "react";
import { useTranslation } from "react-i18next";

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
  fundamentals: {
    active: false,
    show: true,
    keywords: ["fundamentals"]
  },
  creatingAnApi: {
    active: false,
    show: true,
    keywords: ["creating an api"]
  },
  performCrud: {
    active: false,
    show: true,
    keywords: ["perform crud"]
  },
  serverSide: {
    active: false,
    show: true,
    keywords: ["server side"]
  },
  bigQuery: {
    active: false,
    show: true,
    keywords: ["big query"]
  },
  accessControlList: {
    active: false,
    show: true,
    keywords: ["access control list"]
  },
  additionalResources: {
    active: false,
    show: true,
    keywords: ["additional resources"]
  }
};

interface SidebarPropsInterface {}

export const Sidebar: React.FC<SidebarPropsInterface> = ({ children }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [articles, setArticles] = React.useState<any>({
    ...ARTICLES,
    fundamentals: {
      active: true,
      show: true
    }
  });

  const setActive = ({ state }: { state: string }) => {
    const articleKeys = Object.keys(ARTICLES);
    setArticles({
      ...articleKeys.reduce((prepare, item) => {
        return {
          ...prepare,
          [item]: {
            ...articles[item],
            active: false
          }
        };
      }, {}),
      [state]: {
        ...articles[state],
        active: true
      }
    });
  };

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const value = get(event, "target.value", "");
    const articleKeys = Object.keys(ARTICLES);
    let findKeys: Array<string> = [];
    articleKeys.forEach(item => {
      const keywords = ARTICLES[item].keywords;
      keywords.forEach((eachKeyword: string) => {
        if (eachKeyword.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          if (!findKeys.includes(item)) findKeys.push(item);
        }
      });
    });
    const isArray = Array.isArray(findKeys);
    const isArrayLengthOne = isArray && findKeys.length == 1 ? true : false;

    if (isArrayLengthOne) {
      return setArticles({
        ...articleKeys.reduce((prepare, item) => {
          return {
            ...prepare,
            [item]: {
              ...articles[item],
              show: false
            }
          };
        }, {}),
        [findKeys[0]]: {
          show: true
        }
      });
    }

    setArticles({
      ...articleKeys.reduce((prepare, item) => {
        return {
          ...prepare,
          [item]: {
            ...articles[item],
            show: true
          },
        };
      }, {})
    });
  };

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
        onChange={onSearch}
      />
    </Box>
  );

  const FundamentalsContent = (
    <Section>
      <Article
        onClick={() => setActive({ state: "fundamentals" })}
        isActive={articles.fundamentals.active}
        href={"#fundamentals"}
      >
        {t("FUNDAMENTALS")}
      </Article>
      {articles.fundamentals.active ? (
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
        onClick={() => setActive({ state: "creatingAnApi" })}
        isActive={articles.creatingAnApi.active}
        href={"#creating-an-api"}
      >
        {t("CREATING_AN_API")}
      </Article>
      {articles.creatingAnApi.active ? (
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
        onClick={() => setActive({ state: "performCrud" })}
        isActive={articles.performCrud.active}
        href={"#perform-crud"}
      >
        {t("PERFORM_CRUD")}
      </Article>
      {articles.performCrud.active ? (
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
        onClick={() => setActive({ state: "serverSide" })}
        isActive={articles.serverSide.active}
        href={"#server-side-javascript"}
      >
        {t("SERVER_SIDE_JAVASCRIPT")}
      </Article>
      {articles.serverSide.active ? (
        <>
          <SubArticle href={"#server-side-basics"}>{t("BASICS")}</SubArticle>
          <SubArticle href={"#simple-upload-photo"}>
            {t("UPLOAD_PHOTO")}
          </SubArticle>
          <SubArticle href={"#send-email"}>{t("SEND_EMAIL")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const BigQueryContent = (
    <Section>
      <Article
        onClick={() => setActive({ state: "bigQuery" })}
        isActive={articles.bigQuery.active}
        href={"#big-query"}
      >
        {t("BIG_QUERY")}
      </Article>
      {articles.bigQuery.active ? (
        <>
          <SubArticle href={"#big-query-intro"}>{t("BIG_QUERY")}</SubArticle>
          <SubArticle href={"#big-query-summary"}>{t("SUMMARY")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const AccessControlListContent = (
    <Section>
      <Article
        onClick={() => setActive({ state: "accessControlList" })}
        isActive={articles.accessControlList.active}
        href={"#access-control-list"}
      >
        {t("ACCESS_CONTROL_LIST")}
      </Article>
      {articles.accessControlList.active ? (
        <>
          <SubArticle href={"#access-control-list-description"}>
            {t("BASIC")}
          </SubArticle>
          <SubArticle href={"#user-admin"}>{t("USER_ADMIN")}</SubArticle>
          <SubArticle href={"#add-acl-by-uid"}>{t("ADD_ACL_BY_UID")}</SubArticle>
          <SubArticle href={"#check-folder-acl"}>{t("CHECK_FOLDER_ACL")}</SubArticle>
          <SubArticle href={"#folder-acl"}>{t("FOLDER_ACL")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  const AdditionalResourcesContent = (
    <Section>
      <Article
        onClick={() => setActive({ state: "additionalResources" })}
        isActive={articles.additionalResources.active}
        href={"#additional-resources"}
      >
        {t("ADDITIONAL_RESOURCES")}
      </Article>
      {articles.additionalResources.active ? (
        <>
          <SubArticle href={"#medium-links"}>{t("MEDIUM_LINK")}</SubArticle>
          <SubArticle href={"#faq"}>{t("FAQ")}</SubArticle>
        </>
      ) : (
        <></>
      )}
    </Section>
  );

  return (
    <>
      {SearchContent}
      {articles.fundamentals.show && FundamentalsContent}
      {articles.creatingAnApi.show && CreatingAnApiContent}
      {articles.performCrud.show && PerformCrudContent}
      {articles.serverSide.show && ServerSideContent}
      {articles.bigQuery.show && BigQueryContent}
      {articles.accessControlList.show && AccessControlListContent}
      {articles.additionalResources && AdditionalResourcesContent}
      {children}
    </>
  );
};
