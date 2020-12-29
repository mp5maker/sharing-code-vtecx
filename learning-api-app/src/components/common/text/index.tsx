import * as React from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

interface TextPropsInterface extends TypographyProps {}

export const Text: React.FC<TextPropsInterface> = ({
    children,
    ...otherProps
}): JSX.Element => {
    const props = {
        ...otherProps
    }

    return (
        <Typography
            {...props}>
            { children }
        </Typography>
    )
}