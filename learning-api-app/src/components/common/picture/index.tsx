import * as React from "react";
import Avatar, { AvatarProps } from "@material-ui/core/Avatar";
import { Box } from "@learning/components/common/box";
import { Text } from "@learning/components/common/text";
interface ImagePropsInterface extends AvatarProps {
  isAvatar?: boolean;
  alt?: string;
  src: string;
  caption?: JSX.Element | JSX.Element[] | string;
}

export const Picture: React.FC<ImagePropsInterface> = ({
  src,
  alt,
  isAvatar,
  caption,
  ...props
}): JSX.Element => {
  if (isAvatar) {
    return <Avatar {...props} />;
  }

  const imageProps = {
    ...(src ? { src } : {}),
    ...(alt ? { alt } : {})
  };

  return (
    <>
      <Box
        style={{
          backgroundColor: "transparent"
        }}
      >
        <img {...imageProps} />
        {caption ? (
          <Box
            component={"figcaption"}
            style={{
              backgroundColor: "transparent"
            }}
          >
            {typeof caption === "string" ? <Text>{caption}</Text> : caption}
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};
