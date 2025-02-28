import * as z from "zod";

export const LoginSchema = z.object({
    login: z.string().min(1, {
        message: "Введите ваш логин."
    }),
    password: z.string().min(1, {
        message: "Введите пароль."
    })
})

export const RegisterSchema = z.object({
    login: z.string().min(3, {
        message: "Логин должен быть минимум 3 буквы."
    }),
    email: z.string().email({
        message: "Неверный формат Почты"
    }),
    password: z.string().min(6, {
        message: "Пароль должен быть 6 симловов минимум."
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

export const postSchema = z.object({
    heading: z.string().min(1, "Укажите заголовок поста"),
    image: z.union([
        z.instanceof(File)
            .refine((file) => file.size <= MAX_FILE_SIZE, `Максимальный размер файла - 5МБ.`)
            .refine(
                (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
                "Доступны лишь форматы .jpg, .jpeg, .png и .webp.",
            ),
        z.undefined()
    ]),
    text: z.string().min(1, "Введите описание поста.").max(500, "Слишком длинное содержание поста."),
    files: z
        .array(z.instanceof(File))
        .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), `Максимальный размер одного файла - 5МБ.`)
        .optional(),
})

export const emailSchema = z.object({
    name: z.string().min(2, {
        message: "Имя должно быть больше 2-х Символов",
    }),
    email: z.string().email({
        message: "Указан неверный формат почты",
    }).or(z.literal('')).optional(),
    message: z.string().min(10, {
        message: "Длина сообщения должна составлять минимум 10 букв.",
    }),
})

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
