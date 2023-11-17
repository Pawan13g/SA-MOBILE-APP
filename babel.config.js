process.env.TAMAGUI_TARGET = "native"; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "transform-inline-environment-variables",
        // NOTE: include is optional, you can leave this part out
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"]
        }
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true
        }
      ],
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": "./app/shared/components",
            "@screens": "./app/shared/screens",
            "@utils": "./app/shared/utils",
            "@assets": "./app/shared/assets",
            "@constants": "./app/shared/constants",
            "@rdx": "./app/shared/rdx"
          }
        },
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
