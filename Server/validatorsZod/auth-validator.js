const { z } = require("zod");

//create an object schema using ZOD
const signupSchema = z.object({
  username: z
    .string({ required_error_message: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error_message: "Email is required" })
    .trim()
    .min(3, { message: "email must be at least 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" }),
  phone: z
    .string({ required_error_message: "Phone is required" })
    .trim()
    .min(9, { message: "phone must be at least 9 characters" })
    .max(20, { message: "phone must not be more than 20 characters" }),
  password: z
    .string({ required_error_message: "password is required" })
    .trim()
    .min(5, { message: "password must be at least 5 characters" })
    .max(255, { message: "password must not be more than 255 characters" }),
});

module.exports = signupSchema;
