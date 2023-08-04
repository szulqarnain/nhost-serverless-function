import fetch from "node-fetch";
let cachedToken: string | null = null;

export const clearToken = () => {
  cachedToken = null;
};
