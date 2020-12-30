import * as React from 'react'
import MaterialUILink, { LinkProps } from '@material-ui/core/Link'

export interface LinkPropsInterface extends LinkProps {}

export const Link: React.FC<LinkPropsInterface> = ({
  ...props
}): JSX.Element => {
  return (
    <MaterialUILink
      {...props} />
  )
}
