import * as React from "react";
import MaterialBox, { BoxProps } from "@material-ui/core/Box";
import { useTheme } from '@learning/components/hooks/useTheme'

export interface BoxPropsInterface extends BoxProps {
  helper?: 'center' | 'inline' | 'spaceBetween' | 'container' | 'sidebar' | 'main'
}

export const Box: React.FC<BoxPropsInterface> = ({ style, helper, ...props }): JSX.Element => {
  const { theme }: any = useTheme()

  const styleProps = {
    backgroundColor: theme.palette.background.paper,
    ...(helper ? theme.helpers[helper] : {}),
    ...(style ? style : {})
  }

  return (
    <MaterialBox
      style={styleProps}
      {...props}
    />
  )
};
