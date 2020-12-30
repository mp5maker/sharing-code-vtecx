import * as React from 'react'
import { InputField, InputFieldPropsInterface } from '@learning/components/common/input-field'
import { Box } from '@learning/components/common/box'
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from '@learning/components/hooks/useTheme'

interface SearchPropsInterface extends InputFieldPropsInterface {}

export const Search: React.FC<SearchPropsInterface> = ({
  ...props
}): JSX.Element => {
  const { theme } = useTheme()

  return (
    <>
      <Box
        helper={'inline'}>
        <Box
          style={{
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingBottom: '2px',
            color: theme.palette.text.primary,
            borderBottom: `1px solid ${theme.palette.text.secondary}`
          }}>
          <SearchIcon />
        </Box>
        <Box>
          <InputField
            {...props} />
        </Box>
      </Box>
    </>
  )
}