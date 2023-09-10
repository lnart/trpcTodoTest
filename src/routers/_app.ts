import { router } from "../../trpc";
import { userRouter } from "../user/router";
import { stackRouter } from "../stacks/router";

export const appRouter = router({
  user: userRouter,
  stackRouter: stackRouter,
});

export type AppRouter = typeof appRouter;
