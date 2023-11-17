import React from "react";

// HOOKS
import { useState } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHTTPServices } from "../../../hooks/useHttpRequests";

// FORM UTILITIES
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";

// UI COMPONENTS
import { View, Text, Image, TextInput } from "react-native";
import Checkbox from "../../ui/controls/checkbox";
import Button from "../../ui/controls/button";
import SelectEnvironment from "../../ui/sheets/environment/select-env";

// ICONS
import {
  EyeHiddenIcon,
  EyeVisibleIcon,
  MailIcon,
  PasswordIcon,
} from "../../../assets/icons/icons";

// ASSETS
const AppLogo = require("../../../assets/icons/logo.png");
const CityBG = require("../../../assets/backgrounds/city-background.png");

// TYPES
import { RootState } from "@rdx/store";

const Login = () => {
  // HOOKS INSTANCES
  const router = useRouter();
  const { postService } = useHTTPServices();

  // STORE DATA
  const {
    AUTH0_CLIENT_ID,
    AUTH0_BASE_URL,
    AUDIENCE,
    CLIENT_SECRET,
    SCOPE,
    GRANT_TYPE,
  } = useSelector((state: RootState) => state.environment.urls);

  // LOCAL STATES
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  // FORM SCHEMA
  const LoginFormSchema = z.object({
    username: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email must be valid" }),
    password: z.string({ required_error: "Password is required" }),
    isRememberMe: z.boolean().default(false).optional(),
  });

  // FORM TYPE
  type LoginFormType = z.infer<typeof LoginFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      isRememberMe: false,
    },
  });

  /**
   * @description form submit handler
   * @param data {email, password, isRememberMe}
   */

  const onSubmit = async (data: LoginFormType) => {
    // TOKEN ENDPOINT
    const endpoint = `${AUTH0_BASE_URL}oauth/token`;

    // REQUEST BODY
    const body = {
      client_id: AUTH0_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      audience: AUDIENCE,
      scope: SCOPE,
      grant_type: GRANT_TYPE,
      username: data.username,
      password: data.password,
    };

    try {
      const data = await postService(endpoint, body, false, false).then(() => {
        router.push("/tabs/demo");
      });
      console.log(data);
    } catch (error) {}
  };

  return (
    <View className="px-4">
      <View className="flex items-end mt-6">
        <Image source={AppLogo} className="h-12 w-40" />
      </View>

      <View className="w-full items-center my-8">
        <Image source={CityBG} className="h-52 w-[90%]" />
      </View>

      <View className="space-y-4">
        <View className="gap-2">
          <Text className="text-3xl font-bold">Sign in</Text>
          <Text className="text-xl text-gray-500">Welcome back!</Text>
        </View>

        <View className="space-y-4">
          <View className="space-y-6">
            <View className="flex-row items-center border border-gray-300 bg-gray-200 rounded-md py-2 px-3">
              <MailIcon />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="ml-3 text-lg w-full"
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="username"
              />
            </View>

            {errors.username && (
              <Text className="ml-2 text-red-500 font-semibold">
                {errors.username.message}
              </Text>
            )}

            <View className="flex-row items-center border border-gray-300 bg-gray-200 rounded-md py-2 px-3">
              <PasswordIcon />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="ml-3 text-lg w-full"
                    placeholder="Password"
                    secureTextEntry={isPasswordVisible}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />

              <View className="absolute right-3">
                {isPasswordVisible ? (
                  <EyeHiddenIcon
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <EyeVisibleIcon
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </View>
            </View>
          </View>

          {errors.password && (
            <Text className="ml-2 text-red-500 font-semibold">
              {errors.password.message}
            </Text>
          )}

          <View className="px-2">
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  size={"$5"}
                  label="Remember Me"
                  defaultChecked={value}
                  onCheckedChange={onChange}
                />
              )}
              name="isRememberMe"
            />
          </View>

          <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>

          <SelectEnvironment />
        </View>
      </View>
    </View>
  );
};

export default Login;
