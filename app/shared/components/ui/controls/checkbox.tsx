import { Check as CheckIcon } from "@tamagui/lucide-icons";

import {
  Checkbox as TamaguiCheckbox,
  CheckboxProps as TamaguiCheckboxProps,
  Label,
  SizeTokens,
  XStack,
  YStack,
} from "tamagui";

function Checkbox({
  size,

  label = "Accept terms and conditions",

  ...checkboxProps
}: TamaguiCheckboxProps & { size?: SizeTokens; label?: string }) {
  const id = `checkbox-${size?.toString().slice(1)}`;

  return (
    <XStack width={300} alignItems="center" space="$3">
      <TamaguiCheckbox
        id={id}
        size={size}
        className="border-gray-300"
        {...checkboxProps}
      >
        <TamaguiCheckbox.Indicator>
          <CheckIcon />
        </TamaguiCheckbox.Indicator>
      </TamaguiCheckbox>
      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}

export default Checkbox;