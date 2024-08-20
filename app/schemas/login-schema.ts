import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({ message: "Please enter a valid username" }),

  password: z
    .string()
    .min(8, { message: "Password can't be less than 8 character" })
    .max(20, { message: "Password can't be more than 20 character" }),
});
