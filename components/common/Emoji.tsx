import React, { memo } from "react";
import { Image, Text, TextProps } from "react-native";
import reactStringReplace from "react-string-replace";
import twemoji from "twemoji";

const EMOJI_REGEX =
  /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

type TwemojiTextProps = {
  size?: number;
  children: string;
};

const Emoji: React.VFC<TextProps & TwemojiTextProps> = ({
  size,
  children,
  ...props
}) => {
  const treatEmoji = reactStringReplace(children, EMOJI_REGEX, (emoji, i) => {
    // converts the emoji inserted to code or unicode, wte -> twemoji.convert.toCodePoint(emoji)
    return (
      <Image
        key={`emoji-${i}`}
        testID={emoji}
        style={{
          width: size ?? 14,
          height: size ?? 14,
        }}
        source={{
          uri: `https://twemoji.maxcdn.com/v/13.1.0/72x72/${twemoji.convert.toCodePoint(
            emoji
          )}.png`,
        }}
      />
    );
  });

  return (
    <Text
      style={{ fontSize: size, height: size ? size + 10 : 14 + 10 }}
      testID="text"
      {...props}
    >
      {treatEmoji}
    </Text>
  );
};

export default memo(Emoji);
