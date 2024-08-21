import { z } from "zod";

export const passwordResetSchema = z.object({
  email: z.string({ message: "Please enter a valid username" }),
});
