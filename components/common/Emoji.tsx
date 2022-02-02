import React, { memo } from "react";
import twemoji from "twemoji";

const Emoji: React.FC<{ label: string; symbol: string }> = ({
  label,
  symbol,
}) => (
  <span
    aria-label={label || ""}
    aria-hidden={label ? "false" : "true"}
    role="img"
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(symbol, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
  />
);

export default memo(Emoji);
