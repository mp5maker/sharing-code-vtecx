import * as React from 'react'
import { Box } from '@learning/components/common/box'

interface BodyPropsInterface {}

export const Body: React.FC<BodyPropsInterface> = ({
    children
}): JSX.Element => {
    return (
        <Box>
            { children }
        </Box>
    )
}