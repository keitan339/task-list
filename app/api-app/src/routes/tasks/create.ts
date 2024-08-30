import { createRoute } from "honox/factory";
import { Task } from ".";

export const POST = createRoute(async (context) => {
  const req: Task = await context.req.json();
  return context.json(req);
});
