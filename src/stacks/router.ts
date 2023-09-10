import z from "zod";
import { Stack } from "./types";
import { router, publicProcedure } from "../../trpc";

export const stackRouter = router({
  getStackById: publicProcedure
    .input((value: unknown): string => {
      if (typeof value === "string") {
        return value;
      }
      throw new Error("inpput is not a string");
    })
    .query((id) => {
      const input = id;
      return input;
    }),

    getStacks: publicProcedure.query(()=>{
        return 'all the mf stacks'
    })
});

export type StackRouter = typeof stackRouter;
