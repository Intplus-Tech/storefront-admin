import { z } from "zod";

export const PasswordResetSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password can't be less than 8 character" })
    .max(20, { message: "Password can't be more than 20 character" }),
  confirm_password: z
    .string()
    .min(8, { message: "Password can't be less than 8 character" })
    .max(20, { message: "Password can't be more than 20 character" }),
});
