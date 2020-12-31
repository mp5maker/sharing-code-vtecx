import * as React from 'react'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import  { light, dark } from '@learning/constants/themes'
import { THEME_LIGHT, THEME_DARK } from '@learning/constants/settings'

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

    React.useEffect(() => {
        if (currentThemeKey == THEME_LIGHT) {
            // @ts-ignore
            import("@learning/styles/prism-light.css").then(() => {});
        }
        if (currentThemeKey == THEME_DARK) {
            // @ts-ignore
            import("@learning/styles/prism-dark.css").then(() => {});
        }
    }, [])

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
                </>
            </MaterialThemeProvider>
        </ThemeContext.Provider>
    )
}