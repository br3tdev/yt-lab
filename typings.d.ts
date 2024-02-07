export type oAuthProviders =
  | "google"
  | "facebook"
  | "tiktok"
  | "X"
  | "linkedIn"
  | "instgram";

export type OAuthProvider = (typeof oAuthProviders)[number];

export const oAuthProviderName;
