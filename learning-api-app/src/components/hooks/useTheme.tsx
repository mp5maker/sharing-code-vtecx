import * as React from 'react'
import  { ThemeContext } from '@learning/components/contexts/theme-context'

export const useTheme = () => {
    const props = React.useContext(ThemeContext)
    return { ...props }
}