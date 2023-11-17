import { environments } from "@constants/environment";
import { createSlice } from "@reduxjs/toolkit";

export interface EnvState {
  name: "development" | "uat" | "production";
  urls: {
    AUTH0_CLIENT_ID: string;
    AUTH0_BASE_URL: string;
    API_BASE_URL: string;
    AUDIENCE: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    SCOPE: string;
    GRANT_TYPE: string;
  };
}

const initialState: EnvState = {
  name: environments.prod,
  urls: {
    AUTH0_CLIENT_ID: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID_PROD as string,
    AUTH0_BASE_URL: process.env.EXPO_PUBLIC_AUTH0_BASE_URL_PROD as string,
    API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL_PROD as string,
    AUDIENCE: process.env.EXPO_PUBLIC_AUDIENCE_PROD as string,
    CLIENT_ID: process.env.EXPO_PUBLIC_CLIENT_ID_PROD as string,
    CLIENT_SECRET: process.env.EXPO_PUBLIC_CLIENT_SECRET_PROD as string,
    SCOPE: process.env.EXPO_PUBLIC_SCOPE_PROD as string,
    GRANT_TYPE: process.env.EXPO_PUBLIC_GRANT_TYPE_PROD as string,
  },
};

export const envSlice = createSlice({
  name: "environment",
  initialState,
  reducers: {
    setDEVEnvironment: (state) => {
      state.name = environments.uat;
      (state.urls.AUTH0_CLIENT_ID = process.env
        .EXPO_PUBLIC_AUTH0_CLIENT_ID_DEV as string),
        (state.urls.AUTH0_BASE_URL = process.env
          .EXPO_PUBLIC_AUTH0_BASE_URL_DEV as string),
        (state.urls.API_BASE_URL = process.env
          .EXPO_PUBLIC_API_BASE_URL_DEV as string),
        (state.urls.AUDIENCE = process.env.EXPO_PUBLIC_AUDIENCE_DEV as string),
        (state.urls.CLIENT_ID = process.env
          .EXPO_PUBLIC_CLIENT_ID_DEV as string),
        (state.urls.CLIENT_SECRET = process.env
          .EXPO_PUBLIC_CLIENT_SECRET_DEV as string),
        (state.urls.SCOPE = process.env.EXPO_PUBLIC_SCOPE_DEV as string),
        (state.urls.GRANT_TYPE = process.env
          .EXPO_PUBLIC_GRANT_TYPE_DEV as string);
    },

    setUATEnvironment: (state) => {
      state.name = environments.uat;
      (state.urls.AUTH0_CLIENT_ID = process.env
        .EXPO_PUBLIC_AUTH0_CLIENT_ID_UAT as string),
        (state.urls.AUTH0_BASE_URL = process.env
          .EXPO_PUBLIC_AUTH0_BASE_URL_UAT as string),
        (state.urls.API_BASE_URL = process.env
          .EXPO_PUBLIC_API_BASE_URL_UAT as string),
        (state.urls.AUDIENCE = process.env.EXPO_PUBLIC_AUDIENCE_UAT as string),
        (state.urls.CLIENT_ID = process.env
          .EXPO_PUBLIC_CLIENT_ID_UAT as string),
        (state.urls.CLIENT_SECRET = process.env
          .EXPO_PUBLIC_CLIENT_SECRET_UAT as string),
        (state.urls.SCOPE = process.env.EXPO_PUBLIC_SCOPE_UAT as string),
        (state.urls.GRANT_TYPE = process.env
          .EXPO_PUBLIC_GRANT_TYPE_UAT as string);
    },

    setPRODEnvironment: (state) => {
      state.name = environments.prod;
      (state.urls.AUTH0_CLIENT_ID = process.env
        .EXPO_PUBLIC_AUTH0_CLIENT_ID_PROD as string),
        (state.urls.AUTH0_BASE_URL = process.env
          .EXPO_PUBLIC_AUTH0_BASE_URL_PROD as string),
        (state.urls.API_BASE_URL = process.env
          .EXPO_PUBLIC_API_BASE_URL_PROD as string),
        (state.urls.AUDIENCE = process.env.EXPO_PUBLIC_AUDIENCE_PROD as string),
        (state.urls.CLIENT_ID = process.env
          .EXPO_PUBLIC_CLIENT_ID_PROD as string),
        (state.urls.CLIENT_SECRET = process.env
          .EXPO_PUBLIC_CLIENT_SECRET_PROD as string),
        (state.urls.SCOPE = process.env.EXPO_PUBLIC_SCOPE_PROD as string),
        (state.urls.GRANT_TYPE = process.env
          .EXPO_PUBLIC_GRANT_TYPE_PROD as string);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDEVEnvironment, setUATEnvironment, setPRODEnvironment } =
  envSlice.actions;

export default envSlice.reducer;
