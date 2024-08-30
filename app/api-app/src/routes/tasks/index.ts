import { createRoute } from "honox/factory";

export type Task = {
  id: string;
  name: string;
  note?: string;
  createDate: Date;
  completed: boolean;
  completedDate?: Date;
};

export type TasksRequest = {};

export type TasksResponse = {
  tasks: Task[];
};

export const GET = createRoute(async (context) => {
  const response: TasksResponse = {
    tasks: [],
  };

  return context.json(response);
});
