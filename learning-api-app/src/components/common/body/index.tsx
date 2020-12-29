import * as React from 'react'
import { Box } from '@learning/components/common/box'
import { useTheme } from '@learning/components/hooks/useTheme'

interface BodyPropsInterface {}

export const Body: React.FC<BodyPropsInterface> = ({
    children
}): JSX.Element => {
    const { theme }: any = useTheme()
    console.log(theme)

    return (
        <Box
            style={{
                backgroundColor: theme.palette.background.paper,
                minHeight: 'calc(100vh)'
            }}>
            { children }
        </Box>
    )
}