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
  spinnerPlacement = "start",
  ...props
}: IButtonProps & IBoxProps) => {
  // console.log(props?.minWidth || props?.minW || "1/2");
  return (
    <Button
      {...props}
      colorScheme="brand"
      p={4}
      _text={
        props?.variant === "solid"
          ? {
              color: "white",
            }
          : undefined
      }
      borderRadius="3xl"
      minWidth={props?.minWidth || props?.minW || "1/2"}
      shadow={props?.variant === "solid" ? "4" : "none"}
    >
      {children}
    </Button>
  );
};

export default Btn;
