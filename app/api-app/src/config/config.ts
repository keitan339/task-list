export const Config = {
  BASE_PATH: import.meta.env.VITE_BASE_PATH,
  LOG_VERBOSE: import.meta.env.VITE_LOG_VERBOSE === "true",
  RESPONSE_DELAY_TIME: Number(import.meta.env.VITE_RESPONSE_DELAY_TIME),
};
