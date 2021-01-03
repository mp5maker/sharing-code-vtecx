import * as React from 'react'
import { THEME_LIGHT, THEME_DARK } from '@learning/constants/settings'

export const useColor = ({ currentThemeKey }: { currentThemeKey: 'light' |  'dark' }) => {
  const root = React.useRef(document.documentElement).current

  React.useEffect(() => {
    if (currentThemeKey == THEME_DARK) {
      root.style.setProperty('---language-background-color', '#2f2f2f ')
      root.style.setProperty('---language-color', 'white')
      root.style.setProperty('---code-pre-background-color', '#363636')
    }

    if(currentThemeKey == THEME_LIGHT) {
      // @ts-ignore
      root.style.setProperty("---language-background-color", "#e4e4e4");
      root.style.setProperty('---language-color', '#eee')
      root.style.setProperty('---code-pre-background-color', '#363636')
    }

  }, [currentThemeKey])

  return
}