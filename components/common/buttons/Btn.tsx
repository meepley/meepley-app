import React from "react";
import { Button, IBoxProps, IButtonProps } from "native-base";

const Btn = ({
  //@ts-ignore
  children,
  startIcon,
  rightIcon,
  leftIcon,
  endIcon,
  spinner,
  isDisabled,
  isLoading,
  padding = 4,
  spinnerPlacement = "start",
  ...props
}: IButtonProps & IBoxProps) => {
  return (
    <Button
      {...props}
      p={padding}
      borderRadius="30"
      colorScheme="brand"
      minWidth={props?.minWidth || props?.minW || "1/2"}
      shadow={props?.variant === "solid" ? "4" : "none"}
      _text={
        props?.variant === "solid"
          ? {
              color: "white",
            }
          : undefined
      }
    >
      {children}
    </Button>
  );
};

export default Btn;
