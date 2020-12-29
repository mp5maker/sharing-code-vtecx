import * as React from 'react'
import AppBar, { AppBarProps } from '@material-ui/core/AppBar'

interface NavbarPropsInterface extends AppBarProps {
}

export const NavBar: React.FC<NavbarPropsInterface> = ({
  children,
  ...otherProps
}): JSX.Element => {
  const props = {
    ...otherProps
  }

  return (
    <AppBar
      {...props}>
      { children }
    </AppBar>
  )
}