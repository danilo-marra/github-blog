import { z, ZodType } from "zod";

export type SearchData = {
  query: string;
};

export const UserSchema: ZodType<SearchData> = z
.object({
  query: z
  .string()
  .min(3, { message: 'A busca deve conter no mínimo 3 caracteres' })
})