import React from "react";
import {
  Button as TamaguiButton,
  ButtonProps as TamaguiButtonProps,
} from "tamagui";

type Props = {} & TamaguiButtonProps;

const Button = (props: Props) => {
  return (
    <TamaguiButton
      backgroundColor="$green10"
      borderRadius={"$2"}
      color="#fff"
      pressStyle={{ backgroundColor: "$green11" }}
      {...props}
    >
      {props.children}
    </TamaguiButton>
  );
};

export default Button;