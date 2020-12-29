import * as React from "react";
import { Body } from "@learning/components/common/body";
import { Text } from "@learning/components/common/text";
import { useTranslation } from 'react-i18next'

export const Home: React.FC<{}> = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Body>
      <Text
        variant={'h3'}>
        { t('VTECX') }
      </Text>
    </Body>
  );
};
