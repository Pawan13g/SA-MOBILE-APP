// HOOKS
import { useDispatch, useSelector } from "react-redux";

// ACTIONS

import {
  setDEVEnvironment,
  setUATEnvironment,
  setPRODEnvironment,
} from "../../../../rdx/env.slice";

// UI COMPONENTS
import { Adapt, Fieldset, Select, Sheet, YStack } from "tamagui";

// ICONS
import { ChevronUp, CheckCircle2 } from "@tamagui/lucide-icons";

// VISUAL ASSESTS
import { LinearGradient } from "tamagui/linear-gradient";

// CONSTANTS
import { environments } from "../../../../constants/environment";

// TYPES
import { RootState } from "@rdx/store";

export default function SelectEnvironment() {
  // HOOKS INTANCE
  const dispatch = useDispatch();

  // STORE DATA
  const envName = useSelector((state: RootState) => state.environment.name);

  function onValueChange(value: "development" | "uat" | "production") {
    if (value === environments.dev) dispatch(setDEVEnvironment());
    else if (value === environments.uat) dispatch(setUATEnvironment());
    else dispatch(setPRODEnvironment());
  }

  return (
    <Fieldset>
      <Select id="env" onValueChange={onValueChange} value={envName}>
        <Select.Trigger id="env" className="bg-transparent">
          <Select.Value
            className="flex justify-end w-full text-right text-purple-500 underline"
            placeholder="Select Environment"
          />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet modal snapPoints={[20]}>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            ai="center"
            jc="center"
            pos="relative"
            w="100%"
            h="$3"
          >
            <YStack zi={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["$background", "$backgroundTransparent"]}
              br="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              {Object.values(environments).map((value, index) => (
                <Select.Item index={index} key={index} value={value}>
                  <Select.ItemText color="$color">
                    {value.toUpperCase()}
                  </Select.ItemText>
                  <Select.ItemIndicator ml="auto">
                    <CheckCircle2 fill="green" color="white" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            ai="center"
            jc="center"
            pos="relative"
            w="100%"
            h="$3"
          >
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["$backgroundTransparent", "$background"]}
              br="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </Fieldset>
  );
}
