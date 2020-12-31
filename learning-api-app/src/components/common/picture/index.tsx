import * as React from 'react'
import Avatar, { AvatarProps } from '@material-ui/core/Avatar'

interface ImagePropsInterface extends AvatarProps{
  isAvatar?: boolean,
  alt?: string
  src: string
}

export const Picture: React.FC<ImagePropsInterface> = ({
  isAvatar,
  ...props
}): JSX.Element => {
  if (isAvatar) {
    return (
      <Avatar {...props} />
    )
  }

  return (
    <>
      {/* @ts-ignore */}
      <img {...props} />
    </>
  )
}