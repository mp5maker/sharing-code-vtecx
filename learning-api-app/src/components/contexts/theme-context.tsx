import * as React from 'react'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import  { light, dark } from '@learning/constants/themes'
import { THEME_LIGHT, THEME_DARK } from '@learning/constants/settings'
import { Light } from '@learning/components/common/theme-block/light'
import { Dark } from '@learning/components/common/theme-block/dark'

interface ThemeContextPropsInterface {
    themes: any,
    currentThemeKey?: string,
    theme: any,
    setTheme: ((params: any) => any) | ((params: any) => void)
}

export const ThemeContext = React.createContext<Partial<ThemeContextPropsInterface>>({})

export const ThemeProvider = ({ children }: any): JSX.Element => {
    const [currentThemeKey, setCurrentThemeKey] = React.useState<'light'|'dark'>(THEME_DARK)
    const theme = currentThemeKey == THEME_DARK ? dark : light

    return (
        <ThemeContext.Provider
            value={{
                themes: {
                    light,
                    dark
                },
                theme,
                setTheme: setCurrentThemeKey,
                currentThemeKey,
            }}>
            <MaterialThemeProvider
                theme={theme}>
                <>
                    { children }
                    { currentThemeKey === THEME_LIGHT ? <Light /> : <Dark />}
                </>
            </MaterialThemeProvider>
        </ThemeContext.Provider>
    )
}