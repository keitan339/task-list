import { Hono, MiddlewareHandler } from "hono";
import { createApp } from "honox/server";
import { showRoutes } from "hono/dev";
import { Config } from "./config/config";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const delayMiddleware: MiddlewareHandler = async (_context, next) => {
  await sleep(Config.RESPONSE_DELAY_TIME);
  await next();
};

const server = createApp({
  root: "/src/routes",
  ROUTES: import.meta.glob(["/src/routes/**/!(_*|$*|*.test|*.spec).ts"], {
    eager: true,
  }),
  app: new Hono().basePath(Config.BASE_PATH).use("*", delayMiddleware),
});

Config.LOG_VERBOSE && showRoutes(server);

export default server;
