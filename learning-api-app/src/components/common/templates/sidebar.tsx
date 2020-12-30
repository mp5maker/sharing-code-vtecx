import * as React from "react";
import { useTheme } from "@learning/components/hooks/useTheme";
import { Box } from "@learning/components/common/box";
import { Link, LinkPropsInterface } from "@learning/components/common/Link";

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

export const Article: React.FC<LinkPropsInterface> = ({
  children,
  ...props
}): JSX.Element => {
  const { theme }: any = useTheme();

  return (
    <Box
      style={{
        width: '100%'
      }}>
      <Link
        variant={'h6'}
        style={{
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1)
        }}
        {...props}
      >
        { children }
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
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      }}>
      <Link
        variant={"body1"}
        style={{
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }}
        {...props}
      >
        {children}
      </Link>
    </Box>
  );
};
