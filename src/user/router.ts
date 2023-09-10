import { z } from "zod";
import { router, publicProcedure } from "../../trpc";
import { User, UserTest, testZod } from "./types";

export const userRouter = router({
  getUserById: publicProcedure
  .input((val: unknown) => {
    if (typeof val === typeof "") return val;
    throw new Error(`Invalid input : ${typeof val}`);
  })
  .query(async({input, ctx }) => {
    const { db } = ctx ;
    console.log(db);
    const res = await db.query(`SELECT * FROM ussers WHERE user_id='${input}'`)
    return res
  }),
  getAllUsers:publicProcedure
    .query(async({ ctx }) => {
      const { db } = ctx
      console.log(db);
      const res = await db.query(`SELECT user_id FROM users`)
      return res
      
    })
});

export type userRouter = typeof userRouter;
