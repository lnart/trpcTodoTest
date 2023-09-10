import { z } from "zod";

export type User = {
  id: string;
  name: string;
};

export const testZod = z.object({
  id: z.string(),
  name: z.string(),
});

export type UserTest = z.infer<typeof testZod>;
