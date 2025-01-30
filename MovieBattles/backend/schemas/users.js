import z from "zod";

const usersSchema = z.object({
  username: z.string({
    invalid_type_error: "username must be a string",
    required_error: "username is required",
  }),
  email: z
    .string({
      required_error: "username is required",
    })
    .email({
      invalid_type_error: "A valid email address is required",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export function validateUser(input) {
  return usersSchema.safeParse(input);
}

export function validatePartialUser(input) {
  return usersSchema.partial().safeParse(input);
}
