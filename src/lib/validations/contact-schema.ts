import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상 입력해주세요." }),
  email: z.email({ message: "유효한 이메일 주소를 입력해주세요." }),
  message: z
    .string()
    .min(10, { message: "메시지는 10자 이상 입력해주세요." })
    .max(1000, { message: "메시지는 1000자를 초과할 수 없습니다." }),
})

export type ContactFormValues = z.infer<typeof contactSchema>
