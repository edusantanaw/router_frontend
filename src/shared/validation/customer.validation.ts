import * as zod from "zod";
import { validateCpfCnpj } from "./cpfCnpj";

export const customerSchema = zod.object({
  cpfCnpj: zod
    .string({ required_error: "O CPF / CNPJ é obrigatorio!" })
    .refine(validateCpfCnpj, { message: "CPF / CNPJ invalido!" }),
  name: zod
    .string({ required_error: "O nome é obrigatorio!" })
    .min(3, { message: "O nome deve ter no minimo 3 caracteres!" }),
});
