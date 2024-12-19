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

export const ExpertiseSchema = z.object({
    title: z.string().min(1, {
        message: "Введите название Экспертизы"
    }),
    name: z.string().min(1, {
        message: "Введите Имя/ФИО агента"
    }),
    against: z.string().min(1, {
        message: "Введите Контрагента"
    }),
    case: z.string().min(1, {
        message: "Введите номер дела"
    }),
    city: z.string().min(1, {
        message: "Введите Город"
    }),
    address: z.string().min(1, {
        message: "Введите Адрес"
    }),
    // questions: z.array(z.string()),
    questions: z.string().min(1, {
        message: "Введите вопросы по экспертизе"
    }),
    types: z.string().min(1, {
        message: "Введите вид(ы) экспертизы."
    }),
})

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];