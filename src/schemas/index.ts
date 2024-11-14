import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid Email."
    }),
    password: z.string().min(1, {
        message: "Password is required."
    })
})

export const RegisterSchema = z.object({
    login: z.string().min(3, {
        message: "Username should be longer than 3 letters."
    }),
    email: z.string().email({
        message: "Invalid Email."
    }),
    password: z.string().min(6, {
        message: "Password must be 6+ symbols."
    })
})

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];