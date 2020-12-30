import * as React from "react";
import { Body } from "@learning/components/common/body";
import { Text } from "@learning/components/common/text";
import { useTranslation } from 'react-i18next'
import { NavBar } from "@learning/components/common/nav-bar";
import { useTheme } from '@learning/components/hooks/useTheme'

export const Home = (): JSX.Element => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Body>
      <NavBar
        style={{
          minHeight: 60,
          padding: theme.spacing.small
        }}
        position={'static'}>
        <Text
          variant={'h5'}>
          { t('VTECX') }
        </Text>
      </NavBar>
    </Body>
  );
};
