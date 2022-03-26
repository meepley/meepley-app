import React from "react";
import { Box } from "native-base";

const PaddingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box px={12}>{children}</Box>;
};

export default PaddingWrapper;
