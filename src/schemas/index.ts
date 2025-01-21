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
    text: z.string().min(1, "Введите описание поста.").max(500, "Слишком длинное содержание поста."),
    image: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported.",
        )
        .optional(),
    files: z
        .array(z.instanceof(File))
        .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), `Max file size is 5MB.`)
        .optional(),
})

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];