import * as React from "react";
import { Body } from "@learning/components/common/body";
import { Text } from "@learning/components/common/text";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "@learning/components/hooks/useTheme";

export const Home = (): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Body
      aside={(
        <Text>
            sidebar
        </Text>
      )}>
      <Text>
          main
      </Text>
    </Body>
  );
};
